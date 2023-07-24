const initialPostData = {
    content: "",
    mediaURL: null
};

const initialState = {
  posts: [],
  postData: initialPostData,
  sortBy: "Latest",
};

const postReducer=(state,action)=>{
    switch(action.type){
        case "INITIALIZE_ALL_POSTS":
            return {...state, posts:action.payload};
        case "CREATE_POST":
            return {...state, posts:action.payload};
        case "LIKE_POST":
            return {...state, posts:action.payload};
        case "UNLIKE_POST":
            return {...state, posts:action.payload};
        case "DELETE_POST":
            return {...state, posts:action.payload};
        case "EDIT_POST":
            return {...state, posts:action.payload};
        case "SORT_BY":
            return {...state, posts:action.payload};
        default:
            return state;
    }
}

export {initialPostData,initialState, postReducer}