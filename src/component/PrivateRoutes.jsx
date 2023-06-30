import { Route,Routes } from "react-router"
import { Landing } from "../pages/Landing/Landing"

export function PrivateRoutes(){
    return (
        <>
        <Routes>
            <Route path="/"  element={<Landing/>}/>
                
        </Routes>
        </>
    )
}