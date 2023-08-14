import { useUser } from "../context/UserContext";
import { UserList } from "./UserList";
import { useState, useRef, useEffect } from "react";
import { getUserSuggestions } from "../utils/utilityFunctions";
import { useAuth } from "../context/AuthContext";

export function SearchBox() {
  const { users } = useUser();
  const { user: authUser } = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchRef = useRef(null);

  const allUserListExceptCurrent = users.filter(
    (user) => user?.username !== authUser.username
  );

  const searchSuggestionList = getUserSuggestions(
    allUserListExceptCurrent,
    searchInput
  );

  const searchedUser = searchSuggestionList.filter((user) =>
    (user.username.includes(searchInput)) || (user.firstName.toLowerCase().includes(searchInput.toLowerCase()))||(user.lastName.toLowerCase().includes(searchInput.toLowerCase()))
  );

  const handleSearch = (e) => {
    e.stopPropagation();
    setShowSearchResult(!showSearchResult);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSisdeClick);

    return () => {
      document.removeEventListener("click", handleOutSisdeClick);
    };
  }, []);

  const handleOutSisdeClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearchResult(false);
    }
  };
  return (
    <>
      <div ref={searchRef} className="relative">
        <div className="bg-white px-4 py-1 rounded-md flex items-center gap-3 shadow-lg">
          <input
            type="text"
            placeholder="search users"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={handleSearch}
            className="outline-none w-[28vw]"
          />
          <i className="fa fa-search cursor-pointer" aria-hidden="true"></i>
        </div>
        {showSearchResult && (
          <div className="bg-white rounded-md px-5 absolute mt-10 ml-10 w-[30vw] overflow-y-auto">
            {searchedUser.length > 0 ? (
              <>
                {" "}
                {searchedUser?.map((user) => (
                  <UserList key={user?.username} user={user} />
                ))}
              </>
            ) : (
              <p className="bg-white px-4 text-slate-500 shadow-md py-5">
                user not found
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
