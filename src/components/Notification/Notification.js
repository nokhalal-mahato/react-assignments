import './Notification.css';

const Notification=(props)=>{
    return(
        <div style={{backgroundColor:props.bgcolor}} className="notification-item">
            <img src={props.logo} alt={props.alt}/>
            <p>{props.text}</p>
        </div>
    );
}

export default Notification;