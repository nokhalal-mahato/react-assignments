import { Component } from "react";
import './index.css'

class DenominationItem extends Component{
    
    amountSelectedHandler=()=>{
        this.props.onClick(this.props.amount);
    }
    render(){
        const {id,amount}=this.props;
        return(
            <button id={id} className='denomination-item' onClick={this.amountSelectedHandler}>{amount}</button>
        );
    }
}

export default DenominationItem;
