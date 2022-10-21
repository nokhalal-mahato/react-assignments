import {Component} from 'react'
import LanguageFilterItem from '../../Components/LanguageFilterItem';
import languageList from '../../Constants/languageList';
import './index.css'

class GitPopularRepo extends Component{
    state={activeTab:languageList[0],repoList:[]};
    componentDidMount(){

    }
    getRepos= async()=>{
        try{
            const response=fetch('')

        }
        catch(err){
            console.log(err);
        }
    }
    render(){
        return(
            <div className=''>
               <h1>Popular</h1> 
               <div className='language-filter-container'>
                    {languageList.map(item=><LanguageFilterItem key={item.id} data={item} isActive={activeTab.id===item.id}/>)}
               </div>
            </div>
        )
    }
}
export default GitPopularRepo;