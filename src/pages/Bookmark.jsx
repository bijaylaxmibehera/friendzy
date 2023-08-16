import { NavBar } from "../component/NavBar";
import { LeftNav } from "../component/LeftNav";
import { RightNav } from "../component/RightNav";
import { useUser } from "../context/UserContext";
import { usePost } from "../context/PostContext";
import { Card } from "../component/Card";
import { PostCard } from "../component/PostCard";
import { MobileNav } from "../component/MobileNav";

export function Bookmark() {
  const { bookmarks } = useUser();
  const { posts } = usePost();

  const bookmarkedPosts = posts.filter((post) => {
    return bookmarks.some(({ _id }) => _id === post._id);
  });

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid md:grid-cols-5 gap-2 pt-16 pl-3">
        <div className="md:col-span-1 hidden md:block">
          <LeftNav className="h-screen fixed top-0 left-0" />
        </div>
        <div className="col-span-3 min-h-screen">
          <h1 className="font-bold text-2xl text-center my-4">Bookmark</h1>
          {bookmarkedPosts.length === 0 ? (
            <h2 className="text-center text-slate-600">No bookmark available</h2>
          ) : (
            <div>
              {bookmarkedPosts.map((post) => (
                <Card key={post._id}>
                  <PostCard post={post} />
                </Card>
              ))}
            </div>
          )}
          <div className="md:hidden fixed bottom-0">
                <MobileNav/>
              </div>
        </div>

        <div className="md:col-span-1 hidden md:block">
          <RightNav />
        </div>
      </div>
    </>
  );
}
