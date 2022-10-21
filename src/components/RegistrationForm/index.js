import { Component } from "react";
import "./index.css";

class RegistrationForm extends Component {
  state = {
    firstname: "",
    lastName: "",
    lastNameError: false,
    firstnameError: false,
    submitSuccess: false,
  };

  onSubmitSuccess = () => {
    this.setState({ submitSuccess: true });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { lastName, firstname } = this.state;
    if (firstname.length === 0) {
      this.setState({ firstnameError: true });
    }
    if (lastName.length === 0) {
      this.setState({ lastNameError: true });
    }
    if (firstname.length > 0 && lastName.length > 0) {
      this.onSubmitSuccess();
    }
  };

  onChangeFirstName = (event) => {
    this.setState({ firstname: event.target.value, firstnameError: false });
  };

  onChangeLastName = (event) => {
    this.setState({ lastName: event.target.value, lastNameError: false });
  };
  onBlurFirstName = () => {
    const { firstname } = this.state;
    if (firstname.length === 0) {
      this.setState({ firstnameError: true });
    }
  };
  onBlurLastName = () => {
    const { lastName } = this.state;
    if (lastName.length === 0) {
      this.setState({ lastNameError: true });
    }
  };
  submitAnotherResponse=()=>{
    this.setState({
      firstname: "",
      lastName: "",
      // lastNameError: false,
      // firstnameError: false,
      submitSuccess: false,
    });
  }

  render() {
    const {
      firstname,
      lastName,
      lastNameError,
      firstnameError,
      submitSuccess,
    } = this.state;
    return (
      <div className="registration-form-page">
        <h1 className="registration-form-header">Registration Form</h1>
        {!submitSuccess && (
          <form
            className="registration-form-container"
            onSubmit={this.submitForm}
          >
            <label className="registration-form-input-label">FIRST NAME</label>
            <input
              type="text"
              className={`registration-form-input-field ${
                firstnameError ? "registration-form-input-error" : ""
              }`}
              value={firstname}
              placeholder="Username"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {firstnameError && (
              <p className="registration-form-error-message">Required</p>
            )}
            <label className="registration-form-input-label">LAST NAME</label>
            <input
              type="text"
              className={`registration-form-input-field ${
                lastNameError ? "registration-form-input-error" : ""
              }`}
              value={lastName}
              placeholder="Password"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {lastNameError && (
              <p className="registration-form-error-message">Required</p>
            )}
            <button type="submit" className="registration-form-login-button">
              Submit
            </button>
          </form>
        )}
        {submitSuccess && (
          <div className="registration-form-success-container">
            <div className="registration-form-success-image">
              <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success"/>
            </div>
            <h2>Submitted Successfully</h2>
            <button
              className="registration-form-login-button"
              onClick={this.submitAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default RegistrationForm;
