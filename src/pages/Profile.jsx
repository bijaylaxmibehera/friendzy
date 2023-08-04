import { NavBar } from "../component/NavBar";
import { LeftNav } from "../component/LeftNav";
import { RightNav } from "../component/RightNav";

export function Profile() {
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
        </div>

        <div className="col-span-1">
          <RightNav />
        </div>
      </div>
    </>
  );
}
