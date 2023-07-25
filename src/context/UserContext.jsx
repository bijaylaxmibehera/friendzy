import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { initialState, userReducer } from "../reducer/usersReducer";
import { getAllUsersService } from "../services/UserService";

export const UserConext = createContext({
  users: [],
  bookmarks: [],
  user: {},
  userDispatch: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isBtnDisabled: false,
  setIsBtnDisabled: () => {},
});

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    getAllUsersService(dispatch, setIsLoading);
  }, []);
  return (
    <>
      <UserConext.Provider
        value={{
          users: state.users,
          bookmarks: state.bookmarks,
          user: state.user,
          userDispatch: dispatch,
          isLoading,
          setIsLoading,
          isBtnDisabled,
          setIsBtnDisabled,
        }}
      >
        {children}
      </UserConext.Provider>
    </>
  );
}

export const useUser=()=>useContext(UserConext);