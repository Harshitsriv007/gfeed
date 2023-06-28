import React, { useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import Approute from "./approute";
import Dashboard from "../components/pannel/dashboard";
import Profile from "../components/pannel/profile";
import Product from "../components/pannel/product";
import Configuration from "../components/pannel/configuration";
import Order from "../components/pannel/order";
import Plan from "../components/pannel/plan";
import "./loginroute.css";
// import Blank from "../components/pannel/blank";
import { useNavigate } from 'react-router-dom';

const Loginroute = () => 
{
    const navigate = useNavigate();

    useEffect(()=>
    {
        let User = localStorage.getItem('user');
        console.log(User);
        if(User){
                        // navigate to='/app' replace={true}

            navigate("/",{ replace: true });
          
            
            //   setTimeout(() => {
        //     localStorage.removeItem('user');
        //   }, 1000);
        }
        else
        {
            navigate("/login",{ replace: true });

        //  <Navigate from="/path" to="/login" replace={true}/> 
          // To clear a specific item
            // localStorage.clear();
         }
    },[]);
    return <React.Fragment>
            <Routes>
           
                    <Route path='/' element={<Approute />}>
                    <Route index element={<Dashboard />} />
                    {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                    {/* <Route path='/profile' element={ <Outlet/>}/> */}
                    <Route path='/profile'element={<Profile />} />
                    <Route path='/product' element={<Product />} />
                    {/* <Route path='/path/order' element={<Order />} />
                    <Route path='/path/plan' element={<Plan />} />
                    <Route path='/path/config' element={<Configuration />} /> */}
                </Route>
            </Routes>
    </React.Fragment>
}

export default Loginroute;