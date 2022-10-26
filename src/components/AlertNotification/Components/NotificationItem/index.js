import { Component } from "react";
import './index.css'
import { GrFormClose } from "react-icons/gr";

class Notification extends Component{
    onRemovehandler=()=>{
        const {id,onRemove}=this.props;
        onRemove(id);
    }
    render(){
        return (
          <div className="alert-notification-item">
            {this.props.children}
            <GrFormClose
              onClick={this.onRemovehandler}
              className="alert-notification-icon alert-notification-deleteicon"
            />
          </div>
        );
    }
}
export default Notification;