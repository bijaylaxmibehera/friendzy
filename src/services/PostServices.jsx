import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllPostsService = async (postDispatch, setIsLoading) => {
  try {
    setIsLoading(true);

    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");

    if (status === 200) {
      postDispatch({ type: "INITIALIZE_ALL_POSTS", payload: posts });
    }
  } catch (error) {
    console.error("getAllPostsService : Error while fetching posts", error);
  } finally {
    setIsLoading(false);
  }
};

export const likePostService = async (
  postDispatch,
  setIsBtnDisabled,
  token,
  postId
) => {
  try {
    setIsBtnDisabled(true);

    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status === 201) {
      postDispatch({ type: "LIKE_POST", payload: posts });
      toast.success("Liked a post");
    }
  } catch (error) {
    const {
      response: { status },
    } = error;
    if (status === 400) {
      toast.error("Cannot like a post that is already liked.");
    } else {
      toast.error("Something went wrong");
    }
  } finally {
    setIsBtnDisabled(false);
  }
};

export const unlikePostService = async (
  postDispatch,
  setIsBtnDisabled,
  token,
  postId
) => {
  try {
    setIsBtnDisabled(true);

    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status === 201) {
      postDispatch({ type: "UNLIKE_POST", payload: posts });
      toast.success("Unliked the post");
    }
  } catch (error) {
    const {
      response: { status },
    } = error;
    if (status === 400) {
      toast.error("Cannot like a post that is already liked.");
    } else {
      toast.error("Something went wrong");
    }
  } finally {
    setIsBtnDisabled(false);
  }
};

export const deletePostService = async (
  postDispatch,
  setIsBtnDisabled,
  token,
  postId
) => {
  try {
    setIsBtnDisabled(true);

    const {
      status,
      data: { posts },
    } = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token,
      },
    });

    if (status === 201) {
      postDispatch({ type: "DELETE_POST", payload: posts });
      toast.success("Post deleted successfully!");
    }
  } catch (error) {
    toast.error("Something went wrong, try again");
  } finally {
    setIsBtnDisabled(false);
  }
};

export const createPostService = async (
  postDispatch,
  setIsServiceCalling,
  token,
  postData
) => {
  try {
    setIsServiceCalling(true);

    const {
      status,
      data: { posts },
    } = await axios.post(
      "/api/posts",
      { postData },
      { headers: { authorization: token } }
    );

    if (status === 201) {
      toast.success("Post created successfully!");
      postDispatch({ type: "CREATE_POST", payload: posts });
    }
  } catch (error) {
    toast.error("Something went wrong, try again!");
  } finally {
    setIsServiceCalling(false);
  }
};

export const editPostService = async (
  postDispatch,
  setIsServiceCalling,
  token,
  postData
) => {
  try {
    setIsServiceCalling(true);

    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${postData._id}`,
      { postData },
      {
        headers: { authorization: token },
      }
    );

    if (status === 201) {
      toast.success("Post updated successfully!");
      postDispatch({ type: "EDIT_POST", payload: posts });
    }
  } catch (error) {
    toast.error("Something went wrong, try again!");
  } finally {
    setIsServiceCalling(false);
  }
};
