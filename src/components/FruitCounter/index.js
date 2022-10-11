import { Component } from "react";
import './index.css';

class  FruitCounter extends Component{ 
    state={mango:0,banana:0};
    eatBananaHandler=()=>{
        this.setState((prevState)=>({banana:prevState.banana + 1}))
    }
    eatMangohandler=()=>{
        this.setState((prevState)=>({mango:prevState.mango + 1}))
    }
    render(){
        const {mango,banana}=this.state;
        return(
            <div className="fruit-page">
                <div className="fruitPage-content">
                    <h1 className="fruit-header">Bob ate <span>{mango}</span> Mangoes and <span>{banana}</span> Bananas</h1>
                    <div className="fruit-container">
                        <div className="fruit">
                            <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png"/>
                            <button className="fruit-btn" onClick={this.eatMangohandler}>Eat Mango</button>
                        </div>
                        <div className="fruit">
                            <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png"/>
                            <button className="fruit-btn" onClick={this.eatBananaHandler}>Eat Banana</button>
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default FruitCounter;