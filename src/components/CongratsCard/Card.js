import './Card.css';

const Card=(props)=>{
    return(
        <div className='card'>
            <img src={props.profile} alt="profile" className='profile-img'/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={props.prize} alt="prize" className='prize-img'/>
        </div>
    );
}

export default Card;