import { useState } from "react";
import { HomePage, Image, LoginBtn, Text } from "./styledComponent";

const LockUnlock=()=>{
    const [loginStatus,setLoginStatus]=useState(false);

    const toggleLock=()=>{
        setLoginStatus(prevState=>!prevState);
    }
    return (
      <HomePage>
        <Image
          src={
            loginStatus
              ? "https://assets.ccbp.in/frontend/hooks/unlock-img.png"
              : "https://assets.ccbp.in/frontend/hooks/lock-img.png"
          }
          alt=""
        />
        <Text>Your device is {loginStatus ? "Unlocked" : "Locked"}</Text>
        <LoginBtn onClick={toggleLock}>{loginStatus ? "Lock" : "Unlock"}</LoginBtn>
      </HomePage>
    );
}

export default LockUnlock;