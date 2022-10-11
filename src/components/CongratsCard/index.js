import './index.css';
import Card from './Card';

const CongratsCard=()=>{
  return(
    <div className='congrats-card'>
      <h1 className='main-header'>Congratulations</h1>
      <Card name="Kiran V" description="Vishnu institute of Computer Education and Technology, Bhimavaram" 
        profile="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" 
        prize="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  );    
}
export default CongratsCard;