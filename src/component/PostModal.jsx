import { useState, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Modal } from "@mui/material";
import { initialPostData } from "../reducer/postReducer";
import { createPostService, editPostService } from "../services/PostServices";
import { uploadMedia } from "../utils/utilityFunctions";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";
import axios from "axios";

export function PostModal() {
  const { showModal, setShowModal, postDispatch } = usePost();
  const { user: authUser, token } = useAuth();
  const inputFocusRef = useRef();

  const [showEmoji, setShowEmoji] = useState(false);
  const [isMediaUploading, setIsMediaUploading] = useState(false);
  const [isServiceCalling, setIsServiceCalling] = useState(false);
  const [postData, setPostData] = useState(initialPostData);

  const isPostDisabled = postData?.content?.trim().length === 0;

  const isPostContentLimitExceeded = postData?.content?.length > 300;

  const cancelPost = () => {
    setShowModal(false);
    setPostData(initialPostData);
  };

  const handleMediaUpload = async (e) => {
    setIsMediaUploading(true);
    await uploadMedia(e.target.files[0], setPostData);
    setIsMediaUploading(false);
    e.target.value = null;
  };

  const createPostHandler = () => {
    createPostService(postDispatch, setIsServiceCalling, token, postData);
    setPostData(initialPostData);
    setShowModal(false);
    setShowEmoji(false);
  };

  return (
    <>
      <Modal
        initialFocusRef={inputFocusRef}
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-y-auto"
      >
        <div
          className={`bg-white sm:w-[90%] md:w-[40%] mx-auto p-8 my-20 ${
            showEmoji && "my-5 transition duration-150 ease-out md:ease-in"
          } `}
        >
          <div className="flex justify-between items-center relative">
            <h2 className="text-2xl font-semibold">Create Post</h2>
            <button
              onClick={cancelPost}
              className="flex justify-center items-center"
            >
              {" "}
              <i
                className="fa fa-times absolute right-0 cursor-pointer text-red-300 text-2xl"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div>
            <div className="flex gap-2 items-start my-6 border-y-2 py-8 w-full">
              <img
                src={authUser.profileAvatar}
                alt={authUser.username}
                className="w-[40px] h-[40px] rounded-full"
              />
              <textarea
                cols="100"
                className="text-black  resize-none py-[10px] px-[15px] text-sm border-none outline-none"
                placeholder="What's happening?"
                value={postData.content}
                onChange={(e) =>
                  setPostData({ ...postData, content: e.target.value })
                }
              ></textarea>
            </div>
            {postData.mediaURL && (
              <div>
                {postData?.mediaURL.split("/")[4] === "image" ? (
                  <img src={postData?.mediaURL} alt="image" />
                ) : (
                  <video controls>
                    <source
                      src={postData?.mediaURL}
                      type="video/mp4"
                      preload="auto"
                    />
                  </video>
                )}
                <button>Remove</button>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 justify-between">
            <div className="flex">
              <i
                className="fa fa-smile-o text-xl mr-4 cursor-pointer"
                aria-hidden="true"
                onClick={() => setShowEmoji(!showEmoji)}
              ></i>
              <form>
                <label>
                  <i
                    className="fa fa-picture-o text-xl cursor-pointer"
                    aria-hidden="true"
                  ></i>
                  <input
                    type="file"
                    accept="image/*, video/*"
                    className="hidden"
                    onChange={handleMediaUpload}
                  />
                </label>
              </form>

              <div className="relative">
                {showEmoji && (
                  <div
                    className="z-20 absolute top-0"
                    onClick={() => setShowEmoji(true)}
                  >
                    <Picker
                      data={data}
                      maxFrequentRows={0}
                      previewPosition="none"
                      emojiButtonSize={28}
                      emojiSize={20}
                      onEmojiSelect={(emoji) => {
                        setPostData({
                          ...postData,
                          content: postData.content + emoji.native,
                        });
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <p className="text-slate-400">
                  {postData?.content?.length} / 300
                </p>
                <button
                  className={`bg-red-500 text-white px-3 rounded-md font-semibold text-base pb-1 cursor-pointer ${
                    (isPostDisabled || isPostContentLimitExceeded) &&
                    "cursor-not-allowed"
                  } `}
                  disabled={isPostDisabled || isPostContentLimitExceeded}
                  onClick={createPostHandler}
                >
                  post
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
