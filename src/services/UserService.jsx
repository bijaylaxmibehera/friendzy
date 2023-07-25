import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getAllUsersService = async (userDispatch, setIsLoading) => {
    try {
      setIsLoading(true);
  
      const {status, data: { users }}  = await axios.get("/api/users");
  
      if(status === 200) {
        userDispatch({ type:"INITIALIZE_ALL_USERS", payload: users });
      }
  
    } catch (error) {
      console.error("getAllUsersService : Error while fetching users", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  export const followUserService = async (userDispatch, setUser, setIsBtnDisabled, userToBeFollowed, token) => {
      try {
        setIsBtnDisabled(true);
  
        const { status, data: { user, followUser }} = await axios.post(`/api/users/follow/${userToBeFollowed._id}`,{},
          {
            headers: {
              authorization: token,
            }
          }
        );
            if (status === 200) {
              toast.success(`Followed @${userToBeFollowed?.username}`);
              setUser(user);
              userDispatch({
                  type: "UPDATE_FOLLOW_USER",
                  payload: {followUser, user},
              });
          }
      } catch (error) {
        console.error("followUserService : Error while following a user", error);
        toast.error("Something went wrong.");
      } finally {
          setIsBtnDisabled(false);
      }
    };
  
  export const unFollowUserService = async (userDispatch, setUser, setIsBtnDisabled, userToBeUnFollowed, token) => {
      try {
        setIsBtnDisabled(true);
  
        const {status, data: { user, followUser }} = await axios.post(`/api/users/unfollow/${userToBeUnFollowed._id}`, {},
          {
            headers: {
              authorization: token,
            }
          }
        );
  
        if (status === 200) {
          setUser(user);
          toast.success(`Unfollowed @${userToBeUnFollowed?.username}`);
          userDispatch({
              type:"UPDATE_FOLLOW_USER",
              payload: {followUser, user},
          });
  
        }
      } catch (error) {
        console.error("unFollowUserService : Error while unfollowing a user", error);
        toast.error("Something went wrong.");
      }  finally {
          setIsBtnDisabled(false);
      }
  };
  
  export const addPostToBookmarkService = async (userDispatch, setIsBtnDisabled, token, postId) => {
      try {
  
          setIsBtnDisabled(true);
  
          const {status, data: { bookmarks }} = await axios.post(`/api/users/bookmark/${postId}`,{},
              {
              headers: {
                  authorization: token,
              }
              }
            );
  
          if (status === 200) {
              toast.success("Post added to bookmarks.");
                userDispatch({ type:"ADD_TO_BOOKMARK", payload: bookmarks });
          }
      } catch (error) {
          console.error("addPostToBookmarkService : Error while adding a post to bookmark", error);
          const {response: { status }} = error;
          if (status === 400) {
            toast.error("This post is already bookmarked");
          } else {
            toast.error("Something went wrong!");
          }
      } finally {
          setIsBtnDisabled(false);
      }
  }
  
  export const removePostFromBookmarkService = async (userDispatch, setIsBtnDisabled, token, postId) => {
      try {
  
          setIsBtnDisabled(true);
  
          const { status, data: { bookmarks } } = await axios.post(`/api/users/remove-bookmark/${postId}`,{},
              {
                  headers: {
                      authorization: token,
                  }
              }
          );
          if (status === 200) {
              toast.success("Post removed from bookmarks.");
                userDispatch({ type: "REMOVE_FROM_BOOKMARK", payload: bookmarks });
          }
      } catch (error) {
          console.error("removePostFromBookmarkService : Error while removing a post from bookmark", error);
          const {response: { status }} = error;
          if (status === 400) {
              toast.error("Post not bookmarked yet.");
          } else {
              toast.error("Something went wrong!");
          }
      } finally {
          setIsBtnDisabled(false);
      }
  }
  
  export const editUserProfileService = async (userDispatch, setIsBtnDisabled, setUser, token, editInput) => {
      try {
          setIsBtnDisabled(true);
  
          const {status, data: { user }} = await axios.post("/api/users/edit",{ userData: editInput },
              { headers: { authorization: token } }
          );
  
          if (status === 201) {
              userDispatch({ type:"EDIT_USER_PROFILE", payload: user });
              setUser(user);
              toast.success("Updated profile successfully!");
          }
      } catch (error) {
          console.error(error);
          toast.error("Something went wrong");
      } finally {
          setIsBtnDisabled(false);
      }
  }