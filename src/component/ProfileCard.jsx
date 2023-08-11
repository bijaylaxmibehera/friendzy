import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import {
  followUserService,
  unFollowUserService,
} from "../services/UserService";
import { Link } from "react-router-dom";

export function ProfileCard({ user, totalPosts }) {
  const { user: authUser, setToken, token, setUser } = useAuth();
  const { isBtnDisabled, setIsBtnDisabled, userDispatch } = useUser();
  const isAuthUser = authUser?.username === user?.username;

  const isUserFollowed = authUser?.following?.some(({ username }) => {
    return username === user?.username;
  });

  const handleFollow = () => {
    if (isUserFollowed) {
      unFollowUserService(userDispatch, setUser, setIsBtnDisabled, user, token);
    } else {
      followUserService(userDispatch, setUser, setIsBtnDisabled, user, token);
    }
  };
  return (
    <>
      <div className="w-[90%] mx-auto px-3">
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
            <img
              src={user.profileAvatar}
              alt={user.username}
              className="w-[100px] h-[100px] rounded-full"
            />
            <div>
              <h1 className="font-semibold">
                {user.firstName} {user.lastName}
              </h1>
              <p>@{user.username}</p>
            </div>
          </div>
          <div className="grow text-right">
            {isAuthUser ? (
              <button className="bg-blue-500 text-white font-semibold text-lg px-3 py-1 rounded-md">
                <i className="fa fa-cog mr-2" aria-hidden="true"></i>
                Edit profile
              </button>
            ) : (
              <>
                <button
                  className={`${
                    isUserFollowed ? "bg-slate-700" : "bg-red-500"
                  } text-white px-4 py-1 rounded-md font-semibold text-lg`}
                  onClick={handleFollow}
                >
                  {isUserFollowed ? "Unfollow" : "Follow"}
                </button>
              </>
            )}
          </div>
        </div>
        <div>
          <p>{user.bio}</p>
          <Link className="text-blue-500" to={user.website}>
            <i className="fa fa-link" aria-hidden="true"></i>
            {user.website}
          </Link>
          <hr className="my-2" />
          <div className="flex gap-2 font-semibold">
            <h2>{totalPosts} posts</h2>
            <h2>Followers</h2>
            <h2>Following</h2>
          </div>
        </div>
      </div>
    </>
  );
}
