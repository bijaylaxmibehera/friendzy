import { Route,Routes } from "react-router"
import { Landing } from "../pages/Landing/Landing"
import Mockman from "mockman-js";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Home } from "../pages/Home";

export function PrivateRoutes(){
    return (
        <>
        <Routes>
            <Route path="/"  element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/mockman" element={<Mockman/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </>
    )
}