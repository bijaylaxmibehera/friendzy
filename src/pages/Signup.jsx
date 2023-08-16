import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    profileAvatar:
      "https://res.cloudinary.com/bijaylaxmi/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/user_avatar.jpg",
  });
  const navigate = useNavigate();
  const { token, setUser, setToken } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { encodedToken, createdUser },
      } = await axios.post(`/api/auth/signup`, userSignupDetails);

      //store token & user in the local storage
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(createdUser));

      setToken(encodedToken);
      setUser(createdUser);

      toast.success(
        `Account created successfully,
        Welcome ${createdUser?.firstName}!`
      );
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      toast.error(errors[0]);
    }
    setUserSignupDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: "",
      profileAvatar:
        "https://res.cloudinary.com/bijaylaxmi/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/bijaylaxmi.jpg",
    });
  };
  return (
    <>
      <h1 className="text-5xl py-5  font-bold text-center italic">
        friend<span className="text-red-600">zy</span>
      </h1>
      <div className="shadow-lg px-10 py-5 pb-8 w-96 m-auto sm:w-80 sm:px-6">
        <div>
          <h1 className="text-3xl py-5  font-bold text-center mb-6">Signup</h1>
          <form  onSubmit={signupHandler}>
            <div className="flex sm:block">
              <div className="mr-2 sm:mr-0">
                <label for="first-name">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  name="firstName"
                  id="first-name"
                  value={userSignupDetails.firstName}
                  placeholder="Bijaylaxmi"
                  className="mb-6 border border-solid border-gray-600 rounded text-xs p-2 w-full"
                  onChange={(e) =>
                    setUserSignupDetails((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="ml-2 sm:ml-0">
                <label for="last-name">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  name="lastName"
                  id="last-name"
                  value={userSignupDetails.lastName}
                  placeholder="Behera"
                  className="mb-6 border border-solid border-gray-600 rounded text-xs p-2 w-full"
                  onChange={(e) =>
                    setUserSignupDetails((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <label for="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              required
              name="email"
              type="email"
              id="email"
              value={userSignupDetails.email}
              placeholder="bijaylaxmi@friendzy.com"
              className="mb-6 border border-solid border-gray-600 rounded text-xs p-2 w-full"
              onChange={(e) =>
                setUserSignupDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />

            <label for="username">
              Username <span className="text-red-600">*</span>
            </label>
            <input
              required
              name="username"
              id="username"
              value={userSignupDetails.username}
              placeholder="bijaylaxmi"
              className="mb-6 border border-solid border-gray-600 rounded text-xs p-2 w-full"
              onChange={(e) =>
                setUserSignupDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />

            <label for="password" className="mt-3">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              id="password"
              value={userSignupDetails.password}
              placeholder="password"
              className="mb-6 w-full border border-solid border-gray-600 rounded text-xs p-2  relative"
              onChange={(e) =>
                setUserSignupDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            {showPassword ?  (
              <i class="fa fa-eye cursor-pointer mt-2 absolute right-[25vw] sm:right-[30vw] md:right-[35vw] lg:right-[40.1vw]" aria-hidden="true" onClick={()=>setShowPassword((prev) => !prev)}></i>
            ) : (
                <i class="fa fa-eye-slash cursor-pointer mt-2 absolute  right-[25vw] sm:right-[30vw]  md:right-[35vw] lg:right-[40.1vw] " aria-hidden="true" onClick={()=>setShowPassword((prev) => !prev)}></i>
            )}

            <button
              type="submit"
              className="mb-3 w-full py-2 cursor-pointer text-md bg-red-500 text-white hover:transition-colors hover:duration-200 hover:ease-in-out"
            >
              <p>Create New Account</p>
            </button>
          </form>
          <button
            className="text-md w-full text-center cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account&gt;
          </button>
        </div>
      </div>
    </>
  );
}
