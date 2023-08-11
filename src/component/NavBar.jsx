import { logoutUser } from "../services/AuthService";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export function NavBar() {
  const { setToken, setUser } = useAuth();
  const [loader,setLoader]=useState(false);

  const handleLogout = () => {
    logoutUser(setToken, setUser,setLoader);
  };

  return (
    <>
      <nav className="bg-slate-100 fixed w-screen flex justify-between items-center h-14  pl-12 pr-12 z-[100]">
        <h1 className="text-3xl  font-bold italic  sm:text-center lg:text-left">
          friend<span className="text-red-600">zy</span>
        </h1>
        <button
          className="bg-red-500 text-white rounded-md pl-3 pr-3 pt-1 pb-1 font-medium"
          onClick={handleLogout}
        >
          Log out
        </button>
      </nav>
    </>
  );
}
