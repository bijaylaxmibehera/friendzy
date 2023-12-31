import { logoutUser } from "../services/AuthService";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { SearchBox } from "./SearchBox";

export function NavBar() {
  const { setToken, setUser } = useAuth();
  const [loader, setLoader] = useState(false);

  const handleLogout = () => {
    logoutUser(setToken, setUser, setLoader);
  };

  return (
    <>
      <nav className="bg-slate-100 fixed w-screen flex justify-between items-center h-14  md:pl-12 md:pr-12 z-[100] px-3">
        <h1 className="text-3xl  font-bold italic  sm:text-center lg:text-left">
          friend<span className="text-red-600">zy</span>
        </h1>
        <div>
          <SearchBox />
        </div>

        <button
          className="bg-red-500 text-white rounded-md pl-3 pr-3 pt-1 pb-1 text-xs md:font-medium md:text-base"
          onClick={handleLogout}
        >
          Log out
        </button>
      </nav>
    </>
  );
}
