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

    return <React.Fragment><div className="header">
    <span >loading.....</span>
    <Button className = "logout_button" type="submit" onClick={()=>(logout())}>Logout</Button>
    </div>
    <div className="borderline"></div>
    </React.Fragment>

}

export default Header;