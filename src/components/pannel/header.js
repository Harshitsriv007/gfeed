import React from "react";
import "./header.css";
import { Button } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';


const Header =() =>{
    const navigate = useNavigate();

    const logout =()=>{
        console.log("logout");
        localStorage.removeItem("token");
        navigate("/app")

    }


    return <div className="header">
    <span >loading.....</span>
    <Button type="submit" onClick={()=>(logout())}>Logout</Button>
    <div className="borderline"></div>
    </div>
}

export default Header;