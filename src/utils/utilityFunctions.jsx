export const getUserSuggestions = (allUsers, authUser) => {
  const usersList = allUsers?.filter(({ username }) => {
    return (
      username !== authUser?.username &&
      !authUser?.following?.some((followed) => followed?.username === username)
    );
  });

  return usersList;
};

export const getTimeAndDate = (date) => {
  const createdDate = new Date(date);
  const currentDate = new Date();
  const milliseconds = Math.floor(currentDate - createdDate);
  const sec = Math.floor(milliseconds / 1000);
  if (sec > 59) {
    const min = Math.floor(sec / 60);
    if (min > 59) {
      const hr = Math.floor(min / 60);
      if (hr > 23) {
        return createdDate.toLocaleDateString("en-us", {
          day: "numeric",
          year: "numeric",
          month: "short",
        });
      } else {
        return hr > 1 ? `${hr} hrs ago` : `${hr} hr ago`;
      }
    } else {
      return min > 1 ? `${min} mins ago` : `${min} min ago`;
    }
  } else {
    return sec > 1 ? `${sec} secs ago` : `${sec} sec ago`;
  }
};
