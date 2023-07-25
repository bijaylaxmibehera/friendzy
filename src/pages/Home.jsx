import { NavBar } from "../component/NavBar";

export function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-orange-50">
        <h1>This is main section</h1>
      </div>
    </>
  );
}
