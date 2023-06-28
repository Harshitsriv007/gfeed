import React, { useEffect,useState } from "react";

import {Route, Routes,useNavigate, Navigate,useLocation,useParams, useSearchParams } from 'react-router-dom';
import Login from "./components/pannel/login";
import Profile from "./components/pannel/profile";
import Product from "./components/pannel/product";
import Approute from "./routing/approute";
import Dashboard from './components/pannel/dashboard';
import Order from "./components/pannel/order";
import Configuration from "./components/pannel/configuration";
import Plan from "./components/pannel/plan";

function App(props) {
  const [token,setToken] = useState([]);
  const location = useLocation();
  const { handle } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=>
  {
    const search = location;
    // const name = new URLSearch(search).get('user_token');
    // let { user_token } = params; 
    // const tokendata=location.state.user_token?location.state.user_token:'';
    // const tokendata = AuthToken.get("user_token");
    if(search['pathname'] === '/gfeed/')
    {
    <Navigate to="/app" from={search['pathname']} replace={true}/>
    }
    console.log(search['pathname']);
      // let User = localStorage.getItem('user');
      // if(tokendata)
      // {
      //   setToken(tokendata);
      // }
      // if(User){
      //   if(token){
      //   localStorage.setItem('token', token);
      //   }
      // <Navigate to="Dashboard" replace={true}/>
      // }
      // else
      // {
      //   <Navigate to="/" replace={true}/>
      //  }
  },[]);
  return (
      <Routes>
    <Route path="app/Dashboard" element={<Approute />}>
      <Route index element={<Dashboard/>} />
      <Route path='profile'element={<Profile />} />
      <Route path='product' element={<Product />} />
      <Route path="order" element={<Order />} />
      <Route path="config" element={<Configuration/>}/>
      <Route path="plan" element={<Plan/>}/>
    </Route>
    {/* <Route path="/" element={<Login />} /> */}
    <Route path="/app" element={<Login />} />
    {/* <Route path="/" element={<Navigate to="/login" replace={true}/>}/> */}
    <Route path="*" element={<Navigate to="/app" replace={true}/>}/>
     <Route path="/gfeed/" element={<Navigate to="/app" replace={true}/>} />

  </Routes>
  );
}

export default App;

