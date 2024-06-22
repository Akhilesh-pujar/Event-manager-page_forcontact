import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Redirector(){
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("myToken");
            if(token){
                navigate("/home/signin");
            }
            else{
                 navigate("/home")
            }
        
    })

    return (
        <>
         LOADING...
        </>
    )
}