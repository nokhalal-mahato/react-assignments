import { Component } from "react";
import AppItem from "./AppItem";
import applist from "./appList";
import './index.css'
import SearchBar from "./SearchBar";
import TabItem from "./TabItem";

const tabList=[
    {id:"id1",name:"Social"},
    {id:"id2",name:"Games"},
    {id:"id3",name:"News"},
    {id:"id4",name:"Food"},
]
class AppStore extends Component{
    state={activeTab:tabList[0].name,inputvalue:''};

    setActiveTab=(tabname)=>{
        this.setState({activeTab:tabname})
    }

    setInputvalue=(value)=>{
        this.setState({inputvalue:value});
    }
    setFilterAppList=()=>{
        const {activeTab,inputvalue}=this.state;
        const filterAppList=applist.filter((item)=>item.catogory===activeTab);
        const filterAppList2=filterAppList.filter((item)=>item.name.toLocaleLowerCase().includes(inputvalue.toLocaleLowerCase()));
        return filterAppList2;
    }

    render(){
        const {activeTab,inputvalue}=this.state;
        const filteredAppList=this.setFilterAppList();
        // console.log(activeTab);
        return(
            <div className="appstore-page">
                <h1 className="appstore-header">App Store</h1>
                <SearchBar onInputChange={this.setInputvalue} value={inputvalue}/>
                <div className="app-tab-container">
                    {tabList.map((item)=><TabItem id={item.id} key={item.id} name={item.name} onSelectTab={this.setActiveTab} active={activeTab==item.name}/>)}
                </div>
                <div className="app-container">
                    {filteredAppList.map((item)=><AppItem key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl}/>)}
                </div>
            </div>
        )
    }
}

export default AppStore;