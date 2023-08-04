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
  const { postDispatch } = usePost();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const user = users.find((user) => user?.username === post?.username);

  const isPostCreator = authUser?.username === user?.username;

  const isBookmarked = bookmarks?.some(({ _id }) => _id === post._id);

  const isLiked = post?.likes?.likedBy?.some(({ _id }) => _id === authUser._id);

  const [isBookmarkedActive, setIsBookMarkedActive] = useState(false);
  const bookmarkHandler = () => {
    if (isBookmarked) {
      removePostFromBookmarkService(
        userDispatch,
        setIsBtnDisabled,
        token,
        post._id
      );
      setIsBookMarkedActive(false)
    } else {
      addPostToBookmarkService(userDispatch, setIsBtnDisabled, token, post._id);
      setIsBookMarkedActive(true)
    }
    // setIsBookMarkedActive(!isBookmarkedActive);
  };

  return (
    <>
      <div className="p-4">
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
            <div className="grow text-right">
              <button>
                <i
                  className="fa fa-ellipsis-h text-slate-400"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
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
          <button>
            <i className="fa fa-heart-o mr-2" aria-hidden="true"></i>
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
