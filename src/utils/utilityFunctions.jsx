export const getUserSuggestions = (allUsers, authUser) => {
    const usersList = allUsers?.filter(({ username }) => {
        return (username !== authUser?.username) && !authUser?.following?.some(followed => followed?.username === username);
    });

    return usersList;
}