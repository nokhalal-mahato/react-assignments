import './Index.css'

const Banner=(props)=>{
    return(
        <div class={`${props.className} banner`} id={props.id}>
            <div className="banner-container">
                <h2 className="header">{props.headerText}</h2>
                <p className="banner-description">{props.description}</p>
                <button className="banner-btn">Show More</button>
            </div>
            
        </div>
    );
}

export default Banner;