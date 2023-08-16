import { NavBar } from "../component/NavBar";
import { LeftNav } from "../component/LeftNav";
import { RightNav } from "../component/RightNav";
import { usePost } from "../context/PostContext";
import { Card } from "../component/Card";
import { PostCard } from "../component/PostCard";
import { useAuth } from "../context/AuthContext";
import { getPostsBySortingType } from "../utils/utilityFunctions";
import { useState } from "react";
import { MobileNav } from "../component/MobileNav";

export function Explore() {
  const { posts } = usePost();
  const { user } = useAuth();
  const [sortedPosts, setSortedPosts] = useState([]);
  const [activeSortingType, setActiveSortingType] = useState("");

  const explorePosts = posts.filter((post) => {
    return post.username !== user.username;
  });

  const showLatestPost = () => {
    const latestPost = getPostsBySortingType(explorePosts, "Latest");
    setSortedPosts(latestPost);
    setActiveSortingType("Latest");
  };

  const showTrendingPost = () => {
    const trendingPosts = getPostsBySortingType(explorePosts, "Trending");
    setSortedPosts(trendingPosts);
    setActiveSortingType("Trending");
  };

  const showOldestPost = () => {
    const oldestPosts = getPostsBySortingType(explorePosts, "Oldest");
    setSortedPosts(oldestPosts);
    setActiveSortingType("Oldest");
  };
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid md:grid-cols-5 gap-2 pt-16 pl-3">
        <div className="md:col-span-1 hidden md:block">
          <LeftNav className="h-screen fixed top-0 left-0" />
        </div>
        <div className="md:col-span-3  min-h-screen">
          <h1 className="font-bold text-2xl text-center my-4">Explore</h1>
          <div className="flex gap-4 items-center w-[80%] m-auto">
            <button
              onClick={showLatestPost}
              className={`border-2 px-3 py-1 rounded-md text-slate-600 font-semibold ${
                activeSortingType === "Latest"
                  ? "border-red-500 text-red-500"
                  : ""
              }`}
            >
              Latest
            </button>
            <button
              onClick={showTrendingPost}
              className={`border-2 px-3 py-1 rounded-md text-slate-600 font-semibold ${
                activeSortingType === "Trending"
                  ? "border-red-500 text-red-500"
                  : ""
              }`}
            >
              Trending
            </button>
            <button
              onClick={showOldestPost}
              className={`border-2 px-3 py-1 rounded-md text-slate-600 font-semibold ${
                activeSortingType === "Oldest"
                  ? "border-red-500 text-red-500"
                  : ""
              }`}
            >
              Oldest
            </button>
          </div>
          {sortedPosts?.map((post) => (
            <Card key={post._id}>
              <PostCard post={post} />
            </Card>
          ))}
          <div className="md:hidden fixed bottom-0">
            <MobileNav />
          </div>
        </div>

        <div className="md:col-span-1 hidden md:block">
          <RightNav />
        </div>
      </div>
    </>
  );
}
