import express from "express"
import nodemailer from "nodemailer"

import { User } from "../models/userschema.js";
import { Subscribeduser } from "../models/userschema.js";
import jwt from "jsonwebtoken";
import zod from "zod"
import JWT_SECRET from "../config.js";
import authMiddleware from "../middleware.js";

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
});

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})
const subscribeSchema = zod.object({
    email:zod.string().email()
})

const userRouter = express.Router();

userRouter.get("/userInfo", authMiddleware, async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findOne({ _id: userId });
        
        if (user) {
            res.json({
                firstName: user.firstName,
                lastName: user.lastName
            });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


userRouter.post("/signup" ,async (req, res) => {
    const body = req.body;
    
    const { success } = signupSchema.safeParse(body);
    const dbCheck = await User.findOne({ username: body.username });
    
    if (success && !dbCheck) {
        const user = await User.create(body);
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ msg: "User created successfully", token: token });
    } else {
        res.status(411).json({ msg: "username already taken / Incorrect inputs" });
    }
});

userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({ msg: "Invalid credentials" });
        return;
    }

    const check = await User.findOne({ username, password });
    if (check) {
        const token = jwt.sign({ userId: check._id }, JWT_SECRET);
        res.json({ token: token , msg: "Logged in successfully"});
    } else {
        res.status(411).json({ msg: "User not found" });
    }
});

userRouter.put("/update", authMiddleware, async (req, res) => {
    const { success, data } = updateSchema.safeParse(req.body);

    if (!success) {
        res.status(400).json({ msg: "Invalid credentials" });
        return;
    }

    const filter = { _id: req.userId }; 
    const update = { $set: data };

    try {
        const result = await User.updateOne(filter, update);
        if (result.modifiedCount > 0) {
            res.json({ msg: 'Document updated successfully!' });
        } else {
            res.json({ msg: 'Document not found or no modifications were made.' });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

userRouter.get("/", authMiddleware, async(req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
                firstName: {
                    "$regex": filter
                }
            }, 
            {
                lastName: {
                    "$regex": filter
                }
            }]
    });
    const filterdUsers = users.map(user => {
        return {
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
        }
    })
    res.json(filterdUsers); 
})


  
userRouter.post("/subscribe", authMiddleware, async(req,res)=>{

    const email = req.body;
    
    const { success } = subscribeSchema.safeParse(email);
    const dbCheck = await User.findOne({ username: email.email });
    
    if (success && !dbCheck) {
        const user = await Subscribeduser.create(email);
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ msg: "You have Subscribed sucessfully", token: token });
    } else {
        res.status(411).json({ msg: "email already taken / Incorrect inputs" });
    }

    // Send notification email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'akhileshpujari163@gmail.com',
        pass: 'your-email-password',
      },
    });
  
    const mailOptions = {
      from: 'akhileshpujar796@gmail.com',
      to: email,
      subject: 'Subscription Confirmation',
      text: 'Thank you for subscribing to our newsletter!',
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'An error occurred. Please try again.' });
      } else {
        res.send({ message: 'Subscription successful! Please check your email.' });
      }
    });
    

})

export default userRouter;