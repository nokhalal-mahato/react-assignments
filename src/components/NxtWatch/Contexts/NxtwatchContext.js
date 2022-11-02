import React from "react";

const NxtwatchContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export default NxtwatchContext;
