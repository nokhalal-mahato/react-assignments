import './Button.css'

const Button=(props)=>{
    return(
        <button className='social-btn' style={{backgroundColor:props.bgcolor,color:props.color}}>{props.text}</button>
    )
}

export default Button;