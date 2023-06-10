import React from "react";
import Approute from "./routing/approute.jsx";
// import Blank from "./pages/Blank.jsx";
import Dashboard from "./components/pannel/dashboard.jsx";
import Product from "./components/pannel/product.jsx";
import Profile from "./components/pannel/profile.jsx";
import Order from "./components/pannel/order.jsx";
import Config from "./components/pannel/configuration.jsx";
import Plan from "./components/pannel/plan.jsx";
import { Routes,Route } from "react-router-dom";

 const App =() => {
  return (
            <Routes>
                <Route path='/' element={<Approute />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/plan' element={<Plan />} />
                    <Route path='/config' element={<Config />} />
                </Route>
            </Routes>
  )
}
export default App;