import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { getUserSuggestions } from "../utils/utilityFunctions";
import { followUserService } from "../services/UserService";

export function RightNav() {
  const {
    users: allUsers,
    isBtnDisabled,
    setIsBtnDisabled,
    userDispatch,
  } = useUser();
  const { user: authUser, token, setUser } = useAuth();

  const suggestionList = getUserSuggestions(allUsers, authUser);

  const handleFollow = (user) => {
    followUserService(userDispatch, setUser, setIsBtnDisabled, user, token);
  };

  return (
    <>
      <div className="md:min-h-screen fixed">
        <div>
          <h1 className="font-bold text-xl">Suggestions for you</h1>
        </div>
        {suggestionList.length === 0 ? (
          <div className="flex justify-center">
            <p className="font-semibold text-slate-500 mt-9">No user found</p>
          </div>
        ) : (
          <div>
            <ul role="list" class="py-6 divide-y divide-slate-200">
              {suggestionList.map((user) => {
                const { _id, firstName, lastName, username, profileAvatar } =
                  user;
                return (
                  <>
                    <li class="flex py-4 first:pt-0 last:pb-0" key={_id}>
                      <Link to={`/profile/${username}`}>
                        <img
                          class="h-10 w-10 rounded-full"
                          src={profileAvatar}
                          alt={username}
                        />
                      </Link>
                      <Link to={`/profile/${username}`}>
                        <div class="ml-3 overflow-hidden">
                          <p class="text-sm font-medium text-slate-900">
                            {firstName} {lastName}
                          </p>
                          <p class="text-sm text-slate-500 truncate">
                            @{username}
                          </p>
                        </div>
                      </Link>
                      <div className="grow text-right ml-4">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md"
                          onClick={() => handleFollow(user)}
                          disabled={isBtnDisabled}
                        >
                          Follow
                        </button>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
