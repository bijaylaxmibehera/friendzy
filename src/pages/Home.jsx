import { Card } from "../component/Card";
import { LeftNav } from "../component/LeftNav";
import { Loader } from "../component/Loader/Loader";
import { NavBar } from "../component/NavBar";
import { RightNav } from "../component/RightNav";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { PostCard } from "../component/PostCard";

export function Home() {
  const { isLoading, setShowModal, posts, postDispatch } = usePost();
  const { user } = useAuth();

  const { firstName, username, profileAvatar } = user;

  const userFeed = posts?.filter((post) => {
    return (
      post?.username === user?.username ||
      user?.following?.some(({ username }) => username === post.username)
    );
  });

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div>
          <div>
            <NavBar />
          </div>
          <div className="grid grid-cols-5 gap-2 pt-16 pl-3">
            <div className="col-span-1">
              <LeftNav className="h-screen fixed top-0 left-0" />
            </div>
            <div className="col-span-3 border-x-2 border-black min-h-screen">
              <h1 className="font-bold text-2xl text-center my-4">Home</h1>
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
              </Card>
              {userFeed.map((userFeedPosts) => (
                <Card>
                  <PostCard post={userFeedPosts} key={userFeedPosts._id} />
                </Card>
              ))}
            </div>

            <div className="col-span-1">
              <RightNav />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
