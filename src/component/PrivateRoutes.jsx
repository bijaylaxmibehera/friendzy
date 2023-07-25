import { Route,Routes } from "react-router"
import { Landing } from "../pages/Landing/Landing"
import Mockman from "mockman-js";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup";

export function PrivateRoutes(){
    return (
        <>
        <Routes>
            <Route path="/"  element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/mockman" element={<Mockman/>}/>
        </Routes>
        </>
    )
}