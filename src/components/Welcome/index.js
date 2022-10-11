import {Component} from 'react';
import './index.css'
class Welcome extends Component{
    state = { toggleBtn: false };
    
    toggleBtnHandler=()=>{
        this.setState((prevState)=>({toggleBtn:!prevState.toggleBtn}));
    }
    
    render(){
        const {toggleBtn}=this.state;
        return(
            <div className='welcome-page'>
                <h1 className='welcome-header'>Welcome</h1>
                <h3 className='welcome-subheader'>Thank you! Happy Learning</h3>
                <button onClick={this.toggleBtnHandler} className="welcome-btn">{toggleBtn ? 'Subscribed' : 'Subscribe'}</button>
            </div>
        );
    }
}
export default Welcome;
