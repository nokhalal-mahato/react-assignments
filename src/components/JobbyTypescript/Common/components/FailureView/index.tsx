import './index.css';

interface PropsType {
  fetchingMethod:()=>void;
}

const FailureView=(props:PropsType)=>{
    const fetchingMethod = props.fetchingMethod;
    return (
      <div className="jobby-joblists-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure"
        />
        <h2 className="jobby-joblists-failure-heading">
          Oops! Something went wrong
        </h2>
        <p className="jobby-joblists-failure-text">
          We cannot seem to find the page you are looking for.
        </p>
        <button className="jobby-joblists-retry-btn" onClick={fetchingMethod}>
          Retry
        </button>
      </div>
    );
}
export default FailureView;