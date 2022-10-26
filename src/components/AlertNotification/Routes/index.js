import { Component } from "react";
import Notification from "../Components/NotificationItem";
import alertNotifcationList from "../Constants/alertNotificationList";
import './index.css'

class AlertNotification extends Component{
    state={notificationList:alertNotifcationList};
    onRemove=(id)=>{
        this.setState((prevState)=>({notificationList:prevState.notificationList.filter(item=>item.id!==id)}));
    }
    render(){
        const {notificationList}=this.state
        return (
          <div className="alert-notification-page">
            <h1 className="alert-notification-heading">Alert Notifications</h1>
            <div className="alert-notification-container">
              {notificationList.map((item) => (
                <Notification
                  onRemove={this.onRemove}
                  key={item.id}
                  id={item.id}
                >
                  {item.iconUrl}
                  <div className="alert-notification-detail">
                    <h2
                      className="alert-notification-title"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h2>
                    <p className="alert-notification-message">{item.message}</p>
                  </div>
                </Notification>
              ))}
            </div>
          </div>
        );
    }
}

export default AlertNotification;