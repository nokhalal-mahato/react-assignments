import { Component } from "react";
import "./index.css";

class CoinToss extends Component {
  state = { head: true, total: 0, headcount: 0, tail: 0 };

    setCounter=()=>{
        const number=Math.ceil(Math.random()*2);
        this.setState((prevState)=>({total:prevState.total + 1}));
        if(number===1){
            this.setState({head:true});
            this.setState((prevState)=>({headcount:prevState.headcount + 1}));
        }
        else{
            this.setState({head:false});
            this.setState((prevState)=>({tail:prevState.tail + 1}));
        }
    }   
  render() {
    const { head, total, headcount, tail } = this.state;
    return (
      <div className="cointoss-page">
        <div className="cointoss-content">
          <h1 className="cointoss-header">Coin Toss Game</h1>
          <h3>Head (or) Tails</h3>
          <div className="cointoss-img">
          {head ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"/>
          ) : (
            <img src="https://assets.ccbp.in/frontend/react-js/tails-img.png"/>
          )}
          </div>
          
          <button className="cointoss-btn" onClick={this.setCounter}>Toss Coin</button>
          <div className="cointertoss-counter-container">
            <span className="cointoss-counter">Total: {total}</span>
            <span className="cointoss-counter">Head: {headcount}</span>
            <span className="cointoss-counter">Tail: {tail}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default CoinToss;
