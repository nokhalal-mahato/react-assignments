import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {
  LogoutActionContainer,
  LogoutPopupCancelBtn,
  LogoutPopupConfirmBtn,
  LogoutPoputHeader,
} from "./styledComponent";

class LogoutPopup extends Component{
    render(){
        const { onClose, onConfirm } = this.props;
        return (
            <NxtwatchContext.Consumer>
                {value=>{
                    const {isDarkMode}=value;
                    return (
                      <>
                        <LogoutPoputHeader darkMode={isDarkMode}>
                          Are you sure you want to logout?
                        </LogoutPoputHeader>
                        <LogoutActionContainer>
                          <LogoutPopupCancelBtn
                            onClick={onClose}
                            darkMode={isDarkMode}
                          >
                            Cancel
                          </LogoutPopupCancelBtn>
                          <LogoutPopupConfirmBtn
                            logout
                            onClick={onConfirm}
                            darkMode={isDarkMode}
                          >
                            Confirm
                          </LogoutPopupConfirmBtn>
                        </LogoutActionContainer>
                      </>
                    );
                }}
            </NxtwatchContext.Consumer>
          
        );
    }
}
export default LogoutPopup;