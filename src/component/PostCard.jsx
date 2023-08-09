import { getTimeAndDate } from "../utils/utilityFunctions";
import { usePost } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import {
  likePostService,
  unlikePostService,
  editPostService,
  createPostService,
  deletePostService,
} from "../services/PostServices";
import { useState } from "react";
import {
  addPostToBookmarkService,
  removePostFromBookmarkService,
} from "../services/UserService";


export function PostCard({ post }) {
  const {
    _id,
    content,
    mediaUrl,
    likes,
    username,
    createdAt,
    comments,
    profileAvatar,
    firstName,
    lastName,
  } = post;

  const { users, bookmarks, userDispatch } = useUser();
  const { user: authUser, token } = useAuth();
  const { postDispatch,setShowModal } = usePost();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [showServices, setshowServices] = useState(false);

  const user = users.find((user) => user?.username === post?.username);

  const isPostCreator = authUser?.username === user?.username;

  const isBookmarked = bookmarks?.some(({ _id }) => _id === post._id);

  const isLiked = post?.likes?.likedBy?.some(({ _id }) => _id === authUser._id);

  const [isBookmarkedActive, setIsBookMarkedActive] = useState(false);

  const likeHandler = () => {
    // if (isLiked) {
    //   unlikePostService(postDispatch, setIsBtnDisabled, token,_id);
    // } else {
    //   likePostService(postDispatch, setIsBtnDisabled, token, _id);
    // }
  };

  const bookmarkHandler = () => {
    if (isBookmarked) {
      removePostFromBookmarkService(userDispatch, setIsBtnDisabled, token, _id);
      setIsBookMarkedActive(false);
    } else {
      addPostToBookmarkService(userDispatch, setIsBtnDisabled, token, _id);
      setIsBookMarkedActive(true);
    }
    // setIsBookMarkedActive(!isBookmarkedActive);
  };


  const handleDelete=()=>{
    deletePostService(postDispatch, setIsBtnDisabled, token, _id)
  }
  return (
    <>
      <div className="p-4  relative">
        <div className="flex">
          <img
            src={profileAvatar}
            alt={username}
            className="w-[40px] h-[40px] rounded-full"
          />
          <div class="ml-3 overflow-hidden">
            <div className="flex gap-3 items-center">
              <p class="text-sm font-medium text-slate-900">
                {firstName} {lastName}
              </p>
              <span className="text-sm text-slate-400">
                {getTimeAndDate(post?.createdAt)}
              </span>
            </div>

            <p class="text-sm text-slate-500 truncate">@{username}</p>
          </div>
          {isPostCreator && (
            <div
              className="grow text-right"
              onClick={() => setshowServices(!showServices)}
            >
              <button>
                <i
                  className="fa fa-ellipsis-h text-slate-400"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          )}
          {showServices && (
            <ul className="absolute bg-white shadow-lg right-10 top-10 text-left list-none py-4 px-6 rounded-md gap-4  cursor-pointer">
              <li className="flex items-center gap-2 hover:text-red-500">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>Edit
              </li>
              
              <li className="flex items-center gap-3 text-red-500" onClick={handleDelete}>
                <i class="fa fa-trash" aria-hidden="true"></i>Delete
              </li>
            </ul>
          )}
        </div>
        <div className="mt-3">
          <p>{post?.content}</p>

          {post?.mediaUrl &&
            (post?.mediaUrl.split("/")[4] === "image" ? (
              <img
                src={post?.mediaUrl}
                alt={"image"}
                className="mx-auto my-2"
              />
            ) : (
              <video controls>
                <source src={post?.mediaUrl} type="video/mp4" preload="auto" />
              </video>
            ))}
        </div>
        <hr className="my-4 border-t-2" />
        <div className="flex items-center gap-4">
          <button onClick={() => likeHandler()} isDisabled={isBtnDisabled}>
            {isLiked ? (
              <i className="fa fa-heart mr-2" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-heart-o mr-2" aria-hidden="true"></i>
            )}

            {likes.likeCount}
          </button>

          <button onClick={() => bookmarkHandler()}>
            {isBookmarkedActive ? (
              <i className="fa fa-bookmark" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
