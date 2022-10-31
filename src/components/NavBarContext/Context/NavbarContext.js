import React from "react";

const NavbarContext =React.createContext({
    isDarkMode:false,
    toggleDarkMode:()=>{},
});

export default NavbarContext;