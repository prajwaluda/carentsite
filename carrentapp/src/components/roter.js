import React from "react";
import {Route, BrowserRouter, Routes,Outlet} from "react-router-dom"

import Header from "./header";
import Home from "./home";
import About from "./about";
import Product from "./product";
import Par from "./productsav";

const Rout =()=>{
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                <Route exact path="/" Component={Home}/>
                <Route  path="/about" Component={About}/>
                <Route  path="/product" Component={Product}/>
                <Route  path="/details/:productid" Component={Par}/>
                </Routes>
            </BrowserRouter>
            <Outlet/>
        </div>
    )
}

export default Rout;