import React,{useState} from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem("myToken")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/subscribe', { email },

        {
          headers:{
             "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
              // 'Content-Length': JSON.stringify({ email }).length,
          }
        },
        
      );
      
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.log(error)
    }
  };
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Nayana's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="E-mail" value={email}
            
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black"/>
            <button type="submit" >Subscribe</button>
          </form>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
        {message}
      </div>
    </footer>
  );
};

export default Footer;
