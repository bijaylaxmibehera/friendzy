import { useState } from "react";
import { editUserProfileService } from "../services/UserService";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { Modal } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AvatarModal } from "./AvatarModal";

export function EditProfileModal({ user, setShowEditModal, showEditModal }) {
  const [userDetails, setUserDetails] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    profileAvatar: user?.profileAvatar,
    bio: user?.bio,
    website: user?.website,
  });

  const [showAvatar, setShowAvatar] = useState(false);
  const { setUser, token } = useAuth();
  const {setIsBtnDisabled, userDispatch } = useUser();

  const handleInputChange = (e, name) => {
    setUserDetails((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  const cancelEdit = () => {
    setShowEditModal(false);
  };
  const handleProfileEdit = (e) => {
    e.preventDefault();
    if (!userDetails?.firstName) {
      toast.error(`First name is required.`);
      return;
    } else if (!userDetails?.lastName) {
      toast.error(`Last name is required.`);
      return;
    }
    if (userDetails?.firstName && userDetails?.lastName) {
      editUserProfileService(userDispatch, setIsBtnDisabled, setUser, token, {
        ...user,
        ...userDetails,
      });
    }
    setShowEditModal(false);
  };
  
  const handleUpdateAvatar=()=>{
    setShowAvatar(true)
  }


  return (
    <>
      <Modal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        className="overflow-y-auto"
      >
        <div className="bg-white shadow-lg w-[40vw] mx-auto my-8">
          <div className="my-3 flex justify-between items-center pt-4 px-8">
            <h1 className="font-bold text-xl">Edit Profile</h1>

            <i
              className="fa fa-times text-2xl cursor-pointer hover:bg-slate-100 px-2"
              aria-hidden="true"
              onClick={cancelEdit}
            ></i>
          </div>

          <form
            className="flex flex-col items-center border-y-gray-200 border-y-2 my-4 py-6 overflow-y-auto"
            onSubmit={handleProfileEdit}
          >
            <div className=" flex flex-col items-center gap-3">
              <img
                src={userDetails.profileAvatar}
                alt={userDetails.firstName}
                className="w-[90px] h-[90px]"
              />
              <p
                className={`bg-blue-500 text-white py-1 px-4 rounded-md cursor-pointer hover:bg-blue-300 ${showAvatar ? "hidden":"block"}`}
                onClick={handleUpdateAvatar}
              >
                choose avatar
              </p>
              {showAvatar && (
                <AvatarModal
                  userDetails={userDetails}
                  setUserDetails={setUserDetails}
                  setShowAvatar={setShowAvatar}
                />
              )}
            </div>
            <div className="flex flex-col">
              <label>
                First name:
                <input
                  type="text"
                  value={userDetails.firstName}
                  name="firstName"
                  className="mb-6 border border-solid border-gray-600 rounded text-sm p-2 w-full"
                  onChange={(e) => handleInputChange(e, "firstName")}
                  required
                />
              </label>
              <label>
                Last name:
                <input
                  type="text"
                  value={userDetails.lastName}
                  name="lastName"
                  className="mb-6 border border-solid border-gray-600 rounded text-sm p-2 w-full"
                  onChange={(e) => handleInputChange(e, "lastName")}
                  required
                />
              </label>
              <label>
                Bio:
                <input
                  type="text"
                  value={userDetails.bio}
                  name="bio"
                  className="mb-6 border border-solid border-gray-600 rounded text-sm p-2 w-full"
                  onChange={(e) => handleInputChange(e, "bio")}
                />
              </label>
              <label>
                Website:
                <input
                  type="text"
                  value={userDetails.website}
                  name="website"
                  className="mb-6 border border-solid border-gray-600 rounded text-sm p-2 w-full"
                  onChange={(e) => handleInputChange(e, "website")}
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold text-lg px-3 py-1 rounded-md"
            >
              Update
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
