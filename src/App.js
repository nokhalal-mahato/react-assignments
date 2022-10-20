import Superover from './components/SuperOver';
import './App.css';
import CongratsCard from './components/CongratsCard';
import SocialButton from './components/SocialButton';
import NotificationPage from './components/Notification';
import BannerPage from './components/Banners';
import TechnologyCard from './components/TechnologyCard';
import Welcome from './components/Welcome';
import LightDark from './components/LightDark';
import Login from './components/Login';
import FruitCounter from './components/FruitCounter';
import DestinationSearch from './components/DestinationSearch';
import SimpleTodos from './components/SimpleTodos';
import CashWithdrawal from './components/CashWithdrawal';
import GoogleSearch from './components/GoogleSearch';
import BrowzerHistory from './components/BrowserHistory';
import FeedBack from './components/FeedBack';
import Gallery from './components/Gallery';
import Capital from './components/Capitals';
import AppStore from './components/AppStore';
import CoinToss from './components/CoinToss';
import Review from './components/Review';
import CommentApp from './components/CommentApp';
import Appointment from './components/Appointment';
import MoneyTracker from './components/MoneyTracker';
import EmojiGame from './components/EmojiGame';
import DigitalTimer from './components/DigitalTimer';
import DigitalTimerPage from './components/DigitalTimer/DigitalTimerPage';
import FaqApp from './components/FaqApp';
import PasswordManager from './components/PasswordManager';
import MatchGame from './components/MatchGame';
import BlogList from './components/BlogList';
import FetchAndRoute from './components/FetchAndRoute';
import CryptoTracker from './components/CryptoTracker';
import IplDashboard from './components/IplDashboard';
import { Switch,Route } from "react-router-dom";
import MainApp from './main';


const App=() =>{
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route exact path="/superover" component={Superover} />
        <Route exact path="/CongratsCard" component={CongratsCard} />
        <Route exact path="/SocialButton" component={SocialButton} />
        <Route exact path="/NotificationPage" component={NotificationPage} />
        <Route exact path="/BannerPage" component={BannerPage} />
        <Route exact path="/TechnologyCard" component={TechnologyCard} />
        <Route exact path="/Welcome" component={Welcome} />
        <Route exact path="/LightDark" component={LightDark} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/FruitCounter" component={FruitCounter} />
        <Route exact path="/DestinationSearch" component={DestinationSearch} />
        <Route exact path="/SimpleTodos" component={SimpleTodos} />
        <Route exact path="/CashWithdrawal" component={CashWithdrawal} />
        <Route exact path="/GoogleSearch" component={GoogleSearch} />
        <Route exact path="/BrowzerHistory" component={BrowzerHistory} />
        <Route exact path="/FeedBack" component={FeedBack} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Capital" component={Capital} />
        <Route exact path="/AppStore" component={AppStore} />
        <Route exact path="/CoinToss" component={CoinToss} />
        <Route exact path="/Review" component={Review} />
        <Route exact path="/CommentApp" component={CommentApp} />
        <Route exact path="/Appointment" component={Appointment} />
        <Route exact path="/MoneyTracker" component={MoneyTracker} />
        <Route exact path="/EmojiGame" component={EmojiGame} />
        <Route exact path="/DigitalTimer" component={DigitalTimer} />
        <Route exact path="/DigitalTimerPage" component={DigitalTimerPage} />
        <Route exact path="/FaqApp" component={FaqApp} />
        <Route exact path="/PasswordManager" component={PasswordManager} />
        <Route exact path="/MatchGame" component={MatchGame} />
        <Route path="/BlogList" component={BlogList} />
        <Route path="/FetchAndRoute" component={FetchAndRoute} />
        <Route exact path="/CryptoTracker" component={CryptoTracker} />
        <Route path="/IplDashboard" component={IplDashboard} />
        <Route path="/NxtTrendz" component={NxtTrendz} />
      </Switch>
    </div>
  );
}

export default App;
