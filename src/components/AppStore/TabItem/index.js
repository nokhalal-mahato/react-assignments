import { Component } from "react";
import './index.css'

class TabItem extends Component{

    setTabHandler=()=>{
        const {name,onSelectTab}=this.props;
        onSelectTab(name);
    }
    
    render(){
        const {id,name,active}=this.props;
        return(
            <div id={id} className={`tabitem ${active ? "apptab-active":''}`} onClick={this.setTabHandler}>
                <p className="tabitem-name">{name}</p>
            </div>
        )
    }
}

export default TabItem;