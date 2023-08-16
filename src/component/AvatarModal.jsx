import { avatar } from "../backend/db/avatar";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AvatarModal({ userDetails, setUserDetails, setShowAvatar }) {
  const { user: authUser } = useAuth();
  const [selectedAvatar, setSelectedAvatar] = useState("");

  return (
    <>
      <div className="bg-slate-100 shadow-xl p-4">
        <div className="flex justify-between my-2">
          <h2 className="font-semibold">Avatars</h2>
          <i
            className="fa fa-times text-2xl cursor-pointer hover:bg-slate-100 px-2"
            aria-hidden="true"
            onClick={() => setShowAvatar(false)}
          ></i>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {avatar
            ?.filter((img) => img !== authUser?.profileAvatar)
            .map((newAvatar, i) => (
              <div key={i}>
                <img
                  style={{
                    border:
                      selectedAvatar === newAvatar ? "4px solid blue" : "",
                  }}
                  src={newAvatar}
                  alt="new avatar"
                  onClick={() => setSelectedAvatar(newAvatar)}
                  className="w-[50px] h-[50px] cursor-pointer rounded-full p-2"
                />
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-2 rounded-md mt-2 hover:bg-blue-300"
            onClick={() => {
              if (selectedAvatar.length === 0) {
                toast.warning("Please select an avatar!");
              } else {
                setUserDetails({
                  ...userDetails,
                  profileAvatar: selectedAvatar,
                });
              }
              setShowAvatar(false);
            }}
          >
            save
          </button>
        </div>
      </div>
    </>
  );
}
