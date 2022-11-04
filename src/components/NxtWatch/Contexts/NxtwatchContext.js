import React from "react";

const NxtwatchContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  showBanner: true,
  closeBanner: () => {},
  savedVideo: [],
  toggleSavedVideo: () => {},
  likedVideo: [],
  toggleLikedVideo: () => {},
  dislikedVideo: [],
  toggleDislikedVideo: () => {},
});

export default NxtwatchContext;
