import './index.css';
import Button from './Button';

function SocialButton() {
  return (
    <div className="social-button">
      <h1 className="main-header">Social Buttons</h1>
      <div className="button-container">
        <Button text="Like" bgcolor="#eab308" color="white"/>
        <Button text="Comment" bgcolor="white" color='black'/>
        <Button text="Share" bgcolor="#1d4ed8" color="white"/>
      </div>      
    </div>
  );
}

export default SocialButton;
