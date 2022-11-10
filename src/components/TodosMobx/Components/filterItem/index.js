import { Component } from "react";
import { FilterItemContainer } from "./styleComponent";

class FilterItem extends Component{

    onSelectItemHandler=()=>{
        const { data, onSelectFilter } = this.props;
        onSelectFilter(data.id);
    }
    render(){
        const {data,isActive}=this.props;
        return (
          <FilterItemContainer
            onClick={this.onSelectItemHandler}
            isActive={isActive}
          >
            {data.displayText}
          </FilterItemContainer>
        );
    }
}

export default FilterItem;