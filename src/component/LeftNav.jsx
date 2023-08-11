import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export function LeftNav() {
  const { user } = useAuth();
  const {setShowModal}=usePost();
  const navigate=useNavigate();

  const { firstName, lastName, username, profileAvatar } = user;

  const getStyle=({isActive})=>(
    {
      backgroundColor: isActive ? "#ef4444" : "",
      color:isActive ? "#f9fafb" : "",
      fontWeight: isActive ? "bold":"",
      borderRadius:isActive? "10px":""
    }
  )

  return (
    <>
      <div className="md:h-[80vh] md:w-48 flex flex-col justify-between fixed">
        <div className="top">
          <NavLink
            className="py-4 cursor-pointer md:px-5 md:py-2 xs:px-2  pl-10 xl:pl-5 md:text-xs flex  items-center hover:text-red-500"
            to="/"
            style={getStyle}
          >
            <i class="fa fa-home md:text-base w-[22px]" aria-hidden="true"></i>

            <span className="font-medium md:block text-base ">Home</span>
          </NavLink>
          <NavLink
            className="flex items-center  py-4 cursor-pointer md:py-2 md:px-5 xs:px-2  pl-10 xl:pl-5 md:text-xs hover:text-red-500"
            to="/explore"
            style={getStyle}
          >
            <i
              class="fa fa-compass md:text-base w-[22px]"
              aria-hidden="true"
            ></i>

            <span className="font-medium md:block text-base">Explore</span>
          </NavLink>
          <NavLink
            className=" flex  items-center py-4 cursor-pointer md:py-2 md:px-5 xs:px-2  pl-10 xl:pl-5 md:text-xs hover:text-red-500"
            to="/bookmark"
            style={getStyle}
          >
            <i
              class="fa fa-bookmark-o md:text-base w-[25px]"
              aria-hidden="true"
            ></i>
            <span className="font-medium md:block text-base">Bookmarks </span>
          </NavLink>
          <NavLink
            className="flex   items-center py-4 cursor-pointer md:py-2 md:px-5 xs:px-2  pl-10 xl:pl-5 md:text-xs hover:text-red-500"
            to={`/profile/${user?.username}`}
            style={getStyle}
          >
            <i
              class="fa fa-user-o md:text-base w-[25px]"
              aria-hidden="true"
            ></i>
            <span className="font-medium md:block text-base">Profile</span>
          </NavLink>
          <p className=" py-4 cursor-pointer flex  items-center md:py-2 md:px-5 xs:px-2  pl-10 xl:pl-5 md:text-xs hover:text-red-500" role="button" onClick={()=>setShowModal(true)}>
            <i class="fa fa-plus md:base" aria-hidden="true"></i>
            <span className="ml-3 font-medium md:block text-base">
              Create Post
            </span>
          </p>
        </div>
        <div className="border-2 border-slate-300 rounded-xl hover:bg-slate-200 cursor-pointer" onClick={()=>navigate(`/profile/${username}`)}>
          <div className="flex gap-2 items-center pt-3 pb-3 pl-1">
            <img
              src={profileAvatar}
              alt={username}
              className="h-[40px] w-[40px]"
            />
            <div>
              <h1 className="font-semibold">
                {firstName} {lastName}
              </h1>
              <p>@{username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
