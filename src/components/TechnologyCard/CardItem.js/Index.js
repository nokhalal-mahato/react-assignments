import './Index.css';

const Card=(props)=>{
    return(
        <div className={`${props.className} tech-card`}>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
            <img className="card-image" src={props.imageUrl} alt={props.title}/>
        </div>
    );
}

export default Card;