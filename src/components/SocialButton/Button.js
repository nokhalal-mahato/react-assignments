import './Button.css'

const Button=(props)=>{
    return(
        <button style={{backgroundColor:props.bgcolor,color:props.color}}>{props.text}</button>
    )
}

export default Button;