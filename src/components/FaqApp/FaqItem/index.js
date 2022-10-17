import { Component } from "react";
import "./index.css";

class FaqItem extends Component {
  state = { show: false };

  showAnswer = () => {
    this.setState({ show: true });
  };
  hideAnswer = () => {
    this.setState({ show: false });
  };
  render() {
    const { show } = this.state;
    const { data } = this.props;
    return (
      <div className="faq-item">
        <div className="faq-question-section">
          <h2>{data.question}</h2>
          {show ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              onClick={this.hideAnswer}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              onClick={this.showAnswer}
            />
          )}
        </div>
        {show && (
          <>
            <hr />
            <p>{data.answer}</p>
          </>
        )}
      </div>
    );
  }
}
export default FaqItem;
