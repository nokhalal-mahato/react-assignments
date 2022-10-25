import {Component} from 'react'
import LanguageFilterItem from '../../Components/LanguageFilterItem';
import ApiStatusConstant from '../../Constants/ApiStatusConstant';
import languageList from '../../Constants/languageList';
import './index.css'
import {ThreeDots} from 'react-loader-spinner';
import RepositoryItem from '../../Components/RepositoryItem';

class GitPopularRepo extends Component{
    state={activeTab:languageList[0],repoList:[],apiStatus:ApiStatusConstant.loading};
    componentDidMount(){
        this.data={};
        this.getRepos();
    }
    getRepos= async()=>{
        const {activeTab}=this.state;
        if(this.data[activeTab.id]){
            this.setState({activeTab:this.data[activeTab.id]});
        }
        try{
            this.setState({apiStatus:ApiStatusConstant.loading});
            const response =await  fetch(
              "https://apis.ccbp.in/popular-repos?language="+activeTab.id
            );
            if(response.ok){
                const responseData = await response.json();
                const updateData = responseData.popular_repos.map((item) => ({
                  id: item.id,
                  name: item.name,
                  avatarUrl: item.avatar_url,
                  issuesCount: item.issues_count,
                  forksCount: item.forks_count,
                  starsCount: item.stars_count,
                }));
                this.data[activeTab.id] = updateData;
                this.setState({
                  repoList: updateData,
                  apiStatus: ApiStatusConstant.success,
                });
            }
            else{
                this.setState({apiStatus:ApiStatusConstant.failed});
            }
            
        }
        catch(err){
            console.log(err);
            this.setState({ apiStatus: ApiStatusConstant.failed });
        }
    }
    renderContent=()=>{
        const {apiStatus,repoList } = this.state;
        switch(apiStatus){
            case ApiStatusConstant.loading:
                return(<ThreeDots color="#0284c7" height={80} width={80}/>);
            case ApiStatusConstant.failed:
                return (
                  <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" alt='failure' />
                );
            case ApiStatusConstant.success:
                return(repoList.map(item=><RepositoryItem key={item.id} data={item}/>));
        }
    }
    render(){
        const { activeTab,apiStatus } = this.state;
        return(
            <div className='git-popular-repo-page'>
               <h1>Popular</h1> 
               <div className='language-filter-container'>
                {languageList.map(item=><LanguageFilterItem key={item.id} data={item} isActive={activeTab.id===item.id}/>)}
               </div>
               <div className='git-poppular-repo-content'>
                    {this.renderContent()}
               </div>
            </div>
        )
    }
}
export default GitPopularRepo;