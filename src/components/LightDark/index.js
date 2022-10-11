import { Component } from 'react';
import './index.css'

class LightDark extends Component{
    state={dark:false};

    modeToggleHandler=()=>{
        this.setState((prevState)=>({dark:!prevState.dark}));
    }
    render(){
      const {dark}=this.state;
      return(
        <div className='lightdark-page'>
            <div className={`lightdark-content ${dark ? 'dark':''}`}>
                <h1 className='lightdark-header'>Click To Change Mode</h1>
                <button className='lightdark-btn' onClick={this.modeToggleHandler}>{dark ? 'Light Mode': 'Dark Mode'}</button>
            </div>
        </div>
      );
    }
}

export default LightDark;