import { Card } from "./Card";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";
import { PostModal } from "./PostModal";


export function CreatePost(){
    const { setShowModal} = usePost();
    const { user } = useAuth();

    const { firstName, username, profileAvatar } = user;
    return(
        <>
         <Card>
                <div className="flex items-center gap-3 p-3">
                  <img
                    src={profileAvatar}
                    alt={username}
                    className="h-[40px] w-[40px]"
                  />
                  <h2 className="text-slate-500 font-[500] text-xl">
                    What's happening {firstName}?
                  </h2>
                  <button
                    className="grow text-right"
                    onClick={() => setShowModal(true)}
                  >
                    <i
                      className="fa fa-plus md:base text-white bg-red-500 px-3 py-2 rounded-full"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
                <PostModal/>
                
              </Card>
        </>
    )
}