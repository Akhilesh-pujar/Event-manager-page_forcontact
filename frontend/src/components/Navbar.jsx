import React, { useState ,useEffect,} from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { firstNameState, lastNameState } from "../states";
import {useRecoilState} from "recoil";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [showLoader, setShowLoader] = useState(true);

  const [show, setShow] = useState(false);
  const token = localStorage.getItem("myToken")
  useEffect(() => {
      fetch("http://localhost:3000/api/v1/user/userInfo", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          }
      })
      .then(res => res.json())
      .then(data => {
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setShowLoader(false);
      })
  }, [])
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">KING's</div>

      {showLoader ? 
            <div className="h-full mr-5 flex items-center">
                <Loader />
            </div> :
            <span className="flex justify-center">
                <p  className="mr-8 cursor-pointer">Hello, {`${firstName, lastName}`}</p>
                <button onClick={()=>{
                 localStorage.clear();
                 
                    navigate("/home")
                 
                }} className=" box-border text-base rounded-md shadow-md bg-red-500 text-white px-2">Log out</button>
                
            </span>
            }
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
