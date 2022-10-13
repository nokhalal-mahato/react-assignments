import { Component } from "react";
import './index.css';

class Dropdown extends Component{

    onChangeHandler=(event)=>{
        this.props.onSelect(event.target.value)
    }

    render(){
        const {data}=this.props;
        return(
            <select onChange={this.onChangeHandler} className="capital-dropdown">
                {data.map((item)=><option value={item.capital} id={item.id}>{item.capital}</option>)}
            </select>
        );
    }
}

export default Dropdown;