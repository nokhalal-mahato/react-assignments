import { Component } from "react";
import './index.css'
import userList from "./userlist";

class Review extends Component{
    state={idx:0};

    onNext=()=>{
        if(this.state.idx< userList.length -1){
            this.setState((prevState)=>({idx:prevState.idx + 1}));
        }
        else{
            this.setState({idx:0});
        }
    }

    onPrev=()=>{
        if(this.state.idx > 0){
            this.setState((prevState)=>({idx:prevState.idx - 1}));
        }
        else{
            this.setState({idx:userList.length -1});
        }
    }
    render(){
        const {idx}=this.state;
        return(
            <div className="review-page">
                <div className="reivew-content">
                    <h1 className="review-header">Reviews</h1>
                    <img src={userList[idx].imageUrl} alt={userList[idx].name} className="reivew-userimage"/>
                    <div className="review-direction">
                        <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" onClick={this.onPrev}/>
                        <h3 className="review-username">{userList[idx].name}</h3>
                        <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" onClick={this.onNext}/>
                    </div>
                    <p>{userList[idx].company}</p>
                    <p>{userList[idx].review}</p>
                </div>
            </div>
        );
    }
}

export default Review;