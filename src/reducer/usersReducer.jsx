export const initialState = {
  users: [],
  bookmarks: [],
  user: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_ALL_USERS":
      return {
        ...state,
        users: [...action.payload],
      };
    case "INITIALIZE_ALL_BOOKMARKS":
      return {
        ...state,
        bookmarks: [...action.payload],
      };
    case "ADD_TO_BOOKMARK":
      return {
        ...state,
        bookmarks: [...action.payload],
      };
    case "REMOVE_FROM_BOOKMARK":
      return {
        ...state,
        bookmarks: [...action.payload],
      };
    case "UPDATE_FOLLOW_USER":
      const { user, followUser } = action.payload;
      return {
        ...state,
        users: state.users.map((currentUser) =>
          currentUser.username === user.username
            ? { ...user }
            : currentUser.username === followUser.username
            ? { ...followUser }
            : currentUser
        ),
      };
    case "EDIT_USER_PROFILE":
      return {
        ...state,
        users: state?.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};

export {userReducer}