import { NavBar } from "../component/NavBar";
import { LeftNav } from "../component/LeftNav";
import { RightNav } from "../component/RightNav";
import { ProfileCard } from "../component/ProfileCard";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import { useParams } from "react-router";
import { getPostsBySortingType } from "../utils/utilityFunctions";
import {PostCard} from "../component/PostCard";
import {Card} from "../component/Card"

export function Profile() {
  const { username } = useParams();
  const { users } = useUser();
  const { user: authUser } = useAuth();
  const { posts} = usePost();

  const isAuthUser = authUser?.username === username;

  let user = users?.find((user) => {
    return user?.username === username;
  });

  user = isAuthUser ? authUser : user;

  const userPosts = posts?.filter((post) => {
    return post?.username === user?.username;
  });

  const userLatestPosts = getPostsBySortingType(userPosts, "Latest");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-5 gap-2 pt-16 pl-3">
        <div className="col-span-1">
          <LeftNav className="h-screen fixed top-0 left-0" />
        </div>
        <div className="col-span-3 border-x-2 border-black min-h-screen">
          <h1 className="font-bold text-2xl text-center my-4">Profile</h1>
          <div>
            <ProfileCard user={user} totalPosts={userPosts?.length}/>
            <div>
              {(userLatestPosts.length > 0) ? (
                <Card>
                  {userLatestPosts.map((post)=>(
                    <PostCard post={post} key={post._id}/>
                  ))}
                </Card>
              ):(<h2 className="text-center mt-10 text-slate-500 text-lg">No post available</h2>)}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <RightNav />
        </div>
      </div>
    </>
  );
}
