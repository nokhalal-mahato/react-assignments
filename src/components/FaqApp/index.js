import { Component } from "react";
import FaqItem from "./FaqItem";
import './index.css'

class FaqApp extends Component{
    state={FaqList:[],isLoading:true,error:false}
    componentDidMount(){
        this.fetchData();
    }
    fetchData=async()=>{
        const response =await fetch(
          "https://634d59b9f5d2cc648ea3aeda.mockapi.io/faqs/FaqsList"
        );
        if(!response.ok){
            this.setState({loading:false,error:true})
        }
        else{
            const data = await response.json();
            console.log(data);
            this.setState({ isLoading: false, FaqList: data });
        }
        
    }
    render(){
        const {FaqList,isLoading,error}=this.state;
        return (
          <div className="faq-page">
            <h1>FAQs</h1>
            {isLoading && <h1>Loading...</h1>}
            {error && (
              <>
              <h1>Failed to fetch questions</h1>
                <button onClick={this.fetchData}>Retry</button>
              </>
            )}
            <div className="faqitem-container">
              {FaqList.map((item) => (
                <FaqItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        );
    }
}
export default FaqApp;