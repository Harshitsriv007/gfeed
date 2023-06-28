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
    if(search['pathname'] === '/gfeed/')
    {
    <Navigate to="/app" from={search['pathname']} replace={true}/>
    }
    console.log(search['pathname']);

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
    <Route path="/app" element={<Login />} />
    <Route path="*" element={<Navigate to="/app" replace={true}/>}/>
     <Route path="/gfeed/" element={<Navigate to="/app" replace={true}/>} />

  </Routes>
  );
}

export default App;

