import { CreatePost } from "../component/CreatePost";
import { LeftNav } from "../component/LeftNav";
import { NavBar } from "../component/NavBar";
import { RightNav } from "../component/RightNav";

export function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-3 gap-16 p-16">
      <div className="col-span-1">
          <LeftNav className="h-screen fixed top-0 left-0" />
        </div>

        <div className="col-span-1">
          <CreatePost />
         
        </div>

        <div className="col-span-1">
          <RightNav className="w-1/4" />
        </div>
      </div>
    </>
  );
}
