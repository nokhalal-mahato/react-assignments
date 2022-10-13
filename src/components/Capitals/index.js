import { Component } from "react";
import './index.css';
import capitalList from "./captitalList.js";
import Dropdown from "./Dropdown/index.js";

class Capital extends Component{
    state={selectedCountry:capitalList[0]};

    setSelectedCountry=(capital)=>{
        this.setState({selectedCountry:capitalList.find((item)=>item.capital===capital)});
    }

    render(){
        const {selectedCountry}=this.state;
        return(
            <div className="capital-page">
                <div className="capital-page-content">
                    <h1 className="capital-header">Contries And Capitals</h1>
                    <Dropdown data={capitalList} onSelect={this.setSelectedCountry}/>
                    <span className="capital-text">is capital of which country?</span>
                    <h1>{selectedCountry.country}</h1>
                </div>
            </div>
        );
    }
}

export default Capital;