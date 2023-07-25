import { createContext, useContext, useState,useReducer,useEffect } from "react";
import { initialState, postReducer } from "../reducer/postReducer";
import { getAllPostsService } from "../services/PostServices";

export const PostContext = createContext({
  posts: [],
  postDispatch: () => {},
  sortBy: "Latest",
  isLoading: false,
  setIsLoading: () => {},
});

export function PostProvider({ children }) {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllPostsService(dispatch, setIsLoading);
  }, []);

  return (
    <>
      <PostContext.Provider
        value={{
          posts: state.posts,
          sortBy: state.sortBy,
          postDispatch: dispatch,
          isLoading,
          setIsLoading,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
}

export const usePost=()=>useContext(PostContext)