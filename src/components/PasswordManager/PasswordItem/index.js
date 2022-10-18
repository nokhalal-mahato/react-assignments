import { Component } from "react";
import "./index.css";

class PasswordItem extends Component {
  onDeleteHandler = () => {
    const { data, onDelete } = this.props;
    onDelete(data.id);
  };
  onEditStartHandler=()=>{
    const { data, onStartEditingPassword } = this.props;
    onStartEditingPassword(data);
  }
  render() {
    const { data, showPassword } = this.props;
    return (
      <div className="password-item">
        <div className="password-avatar">{data.website[0]}</div>
        <div>
          <h3 className="password-name">{data.website}</h3>
          <h3 className="password-name">{data.username}</h3>
          <p className="password-item-password">
            {showPassword ? data.password : "***********"}
          </p>
        </div>
        <div className="password-item-action">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            onClick={this.onDeleteHandler}
          />
          <img
            src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
            onClick={this.onEditStartHandler}
          />
        </div>
      </div>
    );
  }
}

export default PasswordItem;
