import { Component } from "react";
import { withTranslation } from "react-i18next";
import { FilterItemContainer } from "./styleComponent";
import i18n from "../../i18n";

class FilterItem extends Component{

    onSelectItemHandler=()=>{
        const { data, onSelectFilter } = this.props;
        onSelectFilter(data.id);
    }
    render(){
        const {data,isActive,t}=this.props;
        return (
          <FilterItemContainer
            onClick={this.onSelectItemHandler}
            isActive={isActive}
          >
            {t(data.displayText)}
          </FilterItemContainer>
        );
    }
}

export default withTranslation()(FilterItem);