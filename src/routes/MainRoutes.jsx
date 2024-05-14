import {Route, Routes } from "react-router";
import Home from '../pages/Home/Home'
import Error from "../pages/Error/Error";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Cart from "../pages/Cart/Cart";

function MainRoutes(){
    return(
       <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="*" element={<Error />} />
        <Route path="/cart/:userId" element={<Cart />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductDetails />} />
       </Routes>
       
    )
}
export default MainRoutes;