import { useState } from "react";

export function SortBar({ sortBy, setSortBy }) {
  const [sortingOptions, setSortingOptions] = useState([
    "Latest",
    "Trending",
    "Oldest",
  ]);

  const [showFilters, setShowFilter] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[90%] mx-auto px-4">
        <h1>{sortBy} Posts</h1>
        <div className="relative">
          <i className="fa fa-sliders cursor-pointer" aria-hidden="true" onClick={()=>setShowFilter(!showFilters)}></i>
          {showFilters && (
            <ul className="absolute z-10 shadow-lg rounded-md"> 
              {sortingOptions?.map((sort) => (
                <li
                  key={sort}
                  onClick={() => setSortBy({ type: "SORT_BY", payload: sort })}
                  className="cursor-pointer bg-slate-100 px-4 py-2"
                >
                  {sort}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
