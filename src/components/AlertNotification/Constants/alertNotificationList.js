import { AiFillCheckCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdWarning,MdInfo } from "react-icons/md";

const alertNotifcationList = [
  {
    id: "id-1",
    iconUrl: (
      <AiFillCheckCircle
        style={{ color: "#2dca73" }}
        className="alert-notification-icon"
      />
    ),
    color: "#2dca73",
    title: "Success",
    message: "You can access all the filtes in the folder",
  },
  {
    id: "id-2",
    iconUrl: (
      <RiErrorWarningFill
        style={{ color: "#ff0b37" }}
        className="alert-notification-icon"
      />
    ),
    color: "#ff0b37",
    title: "Error",
    message: "Sorry, you are not authorized to have access to delete the file",
  },
  {
    id: "id-3",
    iconUrl: (
      <MdWarning
        style={{ color: "#ffb800" }}
        className="alert-notification-icon"
      />
    ),
    color: "#ffb800",
    title: "Warning",
    message: "Viewers of this file can see comments and suggestions",
  },
  {
    id: "id-4",
    iconUrl: (
      <MdInfo
        style={{ color: "#0f81e0" }}
        className="alert-notification-icon"
      />
    ),
    color: "#0f81e0",
    title: "Info",
    message: "Anyone on the internet can view these files",
  },
];
export default alertNotifcationList;