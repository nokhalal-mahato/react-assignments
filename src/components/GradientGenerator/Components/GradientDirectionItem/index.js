import { Component } from "react";
import { GradientDirItem } from "./styleComponent";

class GradientDirectionItem extends Component{

    onSelectItemHandler=()=>{
        const { data, onSelectDirection } = this.props;
        onSelectDirection(data);
    }
    render(){
        const {data,isActive}=this.props;
        return (
          <GradientDirItem onClick={this.onSelectItemHandler} isActive={isActive}>
            {data.displayText}
          </GradientDirItem>
        );
    }
}

export default GradientDirectionItem;