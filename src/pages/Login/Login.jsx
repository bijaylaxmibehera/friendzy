import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Login() {
    const [userDetail, setUserDetail] = useState({
        username: "",
        password: "",
      });


      const loginFieldChangeHandler = (e) => {
        const fieldChanged = e.target.id;
        setUserDetail((prev) => ({ ...prev, [fieldChanged]: e.target.value }));
      };

      const handleBtnLogin=()=>{
        console.log("clicked login btn")
      }
      const handleBtnGuestLogin=()=>{
        console.log("signup btn clicked")
      }
  return (
    <>
      <div className="login-page">
        <h1 className="logo">
          friend<span className="highlighted-text">zy</span>
        </h1>
        <div className="login-container">
          <h2>Login</h2>
          <div className="login-inputs">
            <label htmlFor="username">Username 
            <input
              type="text"
              id="username"
              placeholder="example"
              value={userDetail.username}
              onChange={loginFieldChangeHandler}
            />
            </label>
          </div>{" "}
          <div className="login-inputs">
            <label htmlFor="password">Password
            <input
              type="password"
              id="password"
              placeholder="*******"
              value={userDetail.password}
              onChange={loginFieldChangeHandler}
            />
            </label>
          </div>
          <button onClick={handleBtnLogin} className="user-login-btn">Login</button>
          <button onClick={handleBtnGuestLogin} className="guest-login-btn">Guest Login</button>
          <div className="create-acc-btn">
         <Link to="/signup">Create new account<span>&gt;</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}
