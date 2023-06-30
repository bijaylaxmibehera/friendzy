import { NavLink } from "react-router-dom"
import "./Landing.css"

export function Landing(){
return (
    <>
    {/* <h1>This is landing page</h1> */}
    <div className="landing-page">
        <div className="text-container">
            <h1 className="logo">friend<span className="highlighted-text">zy</span></h1>
            <p><span className="feature-text">Follow</span>people around the globe</p>
            <p><span className="feature-text">Connect</span>with your friend</p>
            <p><span className="feature-text">Share</span>what you thinking</p>
            <div className="btn-container">
                <NavLink to="/signup">
                    <button className="signup-btn">Join now</button>
                </NavLink>
                <NavLink to="/login">
                    <button className="login-btn">Already have an account?</button>
                </NavLink>
            </div>
        </div>
        <div className="image-container">
            <img src={require("../../assets/landing.jpg")} alt=""/>
        </div>
    </div>
    </>
)
}