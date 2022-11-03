import React from "react";

const NxtwatchContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  showBanner: true,
  closeBanner:()=>{},
});

export default NxtwatchContext;
