export function SearchBox() {
  return (
    <>
      <div className="rounded-2xl hidden md:block w-[full] relative border">
        <input
          placeholder="Search User"
          className="px-[25px] py-2 outline-none text-sm w-[400px]"
        />
        <i className="fa fa-search absolute left-2 top-[10px]" aria-hidden="true"></i>
      </div>
    </>
  );
}
