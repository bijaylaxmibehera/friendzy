import { NavBar } from "../component/NavBar";
import { LeftNav } from "../component/LeftNav";
import { RightNav } from "../component/RightNav";
import { usePost } from "../context/PostContext";
import { Card } from "../component/Card";
import { PostCard } from "../component/PostCard";
import { useAuth } from "../context/AuthContext";
import { SortBar } from "../component/SortBar";

export function Explore() {
  const { posts,postDispatch,sortBy } = usePost();
  const { user } = useAuth();

  const explorePosts = posts.filter((post) => {
    return post.username !== user.username;
  });

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-5 gap-2 pt-16 pl-3">
        <div className="col-span-1">
          <LeftNav className="h-screen fixed top-0 left-0" />
        </div>
        <div className="col-span-3  min-h-screen">
          <h1 className="font-bold text-2xl text-center my-4">Explore</h1>
           <SortBar type={sortBy} setSortBy={postDispatch}/>
          {explorePosts.map((post) => (
            <Card key={post._id}>
              <PostCard post={post} />
            </Card>
          ))}
        </div>

        <div className="col-span-1">
          <RightNav />
        </div>
      </div>
    </>
  );
}
