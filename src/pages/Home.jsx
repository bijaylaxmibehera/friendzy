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
      <div className="grid grid-cols-4 gap-2 pt-16 pl-3">
        <div className="col-span-1 w-1/5">
          <LeftNav className="h-screen fixed top-0 left-0" />
        </div>

        <div className="col-span-2 border-x-2 border-black min-h-screen">
          <CreatePost />
        </div>

        <div className="col-span-1 w-1/5">
          <RightNav />
        </div>
      </div>
    </>
  );
}
