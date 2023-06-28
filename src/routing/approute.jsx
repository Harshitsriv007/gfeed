import React from "react";
import Navbar from "../components/pannel/navbar";
import Header from "../components/pannel/header";
import {Outlet} from 'react-router-dom';
// import Login from "../components/pannel/login";

const Approute =()=> {
  return (
    <div style={{
      padding: "0px 0px 0px 14%"
  }}>
    <Header/>
    <Navbar/>
    <Outlet/>
  </div>
  )
}


export default Approute;