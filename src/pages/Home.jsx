import { Card } from "../component/Card";
import { LeftNav } from "../component/LeftNav";
import { Loader } from "../component/Loader/Loader";
import { NavBar } from "../component/NavBar";
import { RightNav } from "../component/RightNav";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { PostCard } from "../component/PostCard";
import { CreatePost } from "../component/CreatePost";

export function Home() {
  const { isLoading,posts } = usePost();
  const { user } = useAuth();

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
            <div className="col-span-3 border-x-2 border-black min-h-screen overflow-y">
              <h1 className="font-bold text-2xl text-center my-4">Home</h1>
              <CreatePost />
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
