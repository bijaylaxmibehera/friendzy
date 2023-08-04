import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { token, setUser, setToken } = useAuth();
  const [logInCredential, setLogInCredential] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { encodedToken, foundUser },
      } = await axios.post(`/api/auth/login`, logInCredential);

      //store token & user in the local storage
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(foundUser));

      setToken(encodedToken);
      setUser(foundUser);

      toast.success(`Welcome back, ${foundUser?.firstName}!`);
    } catch (error) {
      toast.error(`User ${error.response.statusText}`);
    }

    setLogInCredential({
      username: "",
      password: "",
    });
  };

  const setGuestCredential = () => {
    setLogInCredential({
      username: "bijaylaxmi",
      password: "bijaylaxmi@098",
    });
  };

  return (
    <>
      <h1 className="text-5xl py-5  font-bold text-center italic">
        friend<span className="text-red-600">zy</span>
      </h1>
      <div className="shadow-lg px-10 py-5 pb-8 w-96 m-auto sm:w-80 sm:px-6">
        <div>
          <form onSubmit={loginHandler}>
            <label for="username">
              Username <span className="text-red-600">*</span>
            </label>
            <input
              required
              name="username"
              id="username"
              value={logInCredential.username}
              placeholder="bijaylaxmi"
              className="mb-6 w-full border border-solid border-gray-600 rounded text-xs p-2 dark:bg-dark-mode"
              onChange={(e)=>setLogInCredential((prev)=>({...prev,username:e.target.value}))}
            />
            <label for="password" className="mt-3">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              id="password"
              value={logInCredential.password}
              placeholder={showPassword ? "password" : "********"}
              className="mb-6 w-full border border-solid border-gray-600 rounded text-xs p-2 dark:bg-dark-mode"
              onChange={(e)=>setLogInCredential((prev)=>({...prev,password:e.target.value}))}
            />
            {showPassword ? (
              <i
                class="fa fa-eye cursor-pointer mt-2 absolute    right-[25vw] sm:right-[30vw] md:right-[35vw] lg:right-[40.1vw]"
                aria-hidden="true"
                onClick={() => setShowPassword((prev) => !prev)}
              ></i>
            ) : (
              <i
                class="fa fa-eye-slash cursor-pointer mt-2 absolute  right-[25vw] sm:right-[30vw]  md:right-[35vw] lg:right-[40.1vw] "
                aria-hidden="true"
                onClick={() => setShowPassword((prev) => !prev)}
              ></i>
            )}

            <button
              type="submit"
              className="mb-6 w-full py-2 cursor-pointer text-md bg-red-500 text-white hover:bg-primary-dark hover:transition-colors hover:duration-200 hover:ease-in-out"
            >
              Log in
            </button>

            <button
              className="guest-submit py-2 cursor-pointer text-md text-primary-color border-x border-y border-primary-color w-full bg-red-500 text-white hover:transition-colors hover:duration-200 hover:ease-in-out"
              onClick={setGuestCredential}
            >
              Guest Login
            </button>
          </form>
          <button
            className="text-lg w-full text-center cursor-pointer mt-1"
            onClick={() => navigate("/signup")}
          >
           Create An Account &gt;
          </button>
        </div>
      </div>
    </>
  );
}
