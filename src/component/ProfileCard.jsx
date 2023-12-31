import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import {
  followUserService,
  unFollowUserService,
} from "../services/UserService";
import { Link } from "react-router-dom";
import { EditProfileModal } from "./EditProfileModal";

export function ProfileCard({ user, totalPosts }) {
  const { user: authUser,token, setUser } = useAuth();
  const { setIsBtnDisabled, userDispatch } = useUser();
  const isAuthUser = authUser?.username === user?.username;
  const [showEditModal,setShowEditModal]=useState(false);

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
      {showEditModal && (<EditProfileModal user={authUser} setShowEditModal={setShowEditModal} showEditModal={showEditModal}/>)}
      <div className="md:w-[90%] mx-auto px-3">
        <div className="flex md:items-center flex-col md:flex-row gap-4 md:gap-0">
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
          <div className="md:grow md:text-right">
            {isAuthUser ? (
              <button className="bg-blue-500 text-white font-semibold text-lg px-3 py-1 rounded-md" onClick={()=>setShowEditModal(!showEditModal)}>
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
            <h2 className="cursor-pointer relative">
              {user.followers.length} Followers
            </h2>
            <h2 className="cursor-pointer relative">
              {user.following.length} Following
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
