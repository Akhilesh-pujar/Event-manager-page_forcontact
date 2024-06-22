import mongoose from "mongoose"
const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        minLength:4,
        maxLength:30,
        trim:true
    },
    password:{
        type:String,
        require:true,
        minLength:6,
        maxLength:30,
    },
    firstname:{
        type:String,
        require:true,
        trim:true,
        minLength:4,
        maxLength:40,
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
        minLength:4,
        maxLength:50
    }

})
export const User = mongoose.model("authenticatedUser",userSchema)
