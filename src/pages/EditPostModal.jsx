import { useState, useRef } from "react";
import { editPostService } from "../services/PostServices";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Modal } from "@mui/material";
import { uploadMedia } from "../utils/utilityFunctions";

export function EditPostModal({ postDetails, setShowEditPost, showEditPost }) {
  const { postDispatch } = usePost();
  const inputFocusRef = useRef();
  const { user: authUser, token } = useAuth();
  const [isServiceCalling, setIsServiceCalling] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isMediaUploading, setIsMediaUploading] = useState(false);
  const [postValue, setPostValue] = useState(postDetails);
  const isPostDisabled = postValue?.content?.trim().length === 0;

  const isPostContentLimitExceeded = postValue?.content?.length > 300;

  const cancelEdit=()=>{
    setShowEditPost(false);
    setPostValue(postDetails);
  }

  const handleRemoveMedia = () => {
    setPostValue((prev) => ({ ...prev, mediaURL: "" }));
  };

  const handleMediaUpload = async (e) => {
    setIsMediaUploading(true);
    await uploadMedia(e.target.files[0], setPostValue);
    setIsMediaUploading(false);
    e.target.value = null;
  };

  const editPostHandler = () => {
    editPostService(postDispatch, setIsServiceCalling, token, postValue);
    setShowEditPost(false);
    setShowEmoji(false);
  };

  return (
    <>
      {showEditPost && (
        <Modal
          initialFocusRef={inputFocusRef}
          open={showEditPost}
          onClose={() => setShowEditPost(false)}
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
              <h2 className="text-2xl font-semibold">Edit Post</h2>
              <button className="bg-slate-600 text-white px-3 py-1 rounded-md font-semibold" onClick={cancelEdit}>Cancel</button>
            </div>
            <div className="my-6 border-y-2 py-8 w-full">
              <div className="flex gap-2 items-start">
                <img
                  src={authUser.profileAvatar}
                  alt={authUser.username}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <textarea
                  cols="100"
                  className="text-black  resize-none py-[10px] px-[15px] text-sm border-none outline-none"
                  placeholder="What's happening?"
                  value={postValue.content}
                  onChange={(e) =>
                    setPostValue({ ...postValue, content: e.target.value })
                  }
                ></textarea>
              </div>
              {postValue.mediaURL && (
                <div className="relative">
                  <button className="text-2xl absolute right-1">
                    <i class="fa fa-times-circle" aria-hidden="true" onClick={handleRemoveMedia}></i>
                  </button>
                  {postValue?.mediaURL.split("/")[4] === "image" ? (
                    <img
                      src={postValue?.mediaURL}
                      alt="image"
                      className="w-[250px] h-[250px]"
                    />
                  ) : (
                    <video controls>
                      <source
                        src={postValue?.mediaURL}
                        type="video/mp4"
                        preload="auto"
                      />
                    </video>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 justify-between mt-3">
              <div className="flex">
                <i
                  className="fa fa-smile-o text-xl mr-4 cursor-pointer"
                  aria-hidden="true"
                  onClick={() => setShowEmoji(!showEmoji)}
                ></i>
                <div>
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
                </div>

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
                          setPostValue({
                            ...postValue,
                            content: postValue.content + emoji.native,
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
                    {postValue?.content?.length} / 300
                  </p>
                  <button
                    className={`bg-red-500 text-white px-3 rounded-md font-semibold text-base pb-1 cursor-pointer ${
                      (isPostDisabled || isPostContentLimitExceeded) &&
                      "cursor-not-allowed"
                    } `}
                    disabled={isPostDisabled || isPostContentLimitExceeded}
                    onClick={editPostHandler}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
