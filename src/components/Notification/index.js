import './index.css';
import Notification from './Notification';

function NotificationPage() {
  return (
    <div className="notification-page">
      <h1 className='main-header'>Notifications</h1>
      <div className="notification-container">
        <Notification text="Information Message" bgcolor="#0b69ff" alt="information" logo="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
        <Notification text="Success Message" bgcolor="#2dca73" alt="Success" logo="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
        <Notification text="Warning Message" bgcolor="#ffb800" alt="warning" logo="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
        <Notification text="Error Message"  bgcolor="#ff0b37" alt="eror" logo="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
      </div>
    </div>
  );
}

export default NotificationPage;
