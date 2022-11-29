import './index.css'

const EmptyView=()=>{
    return (
      <div className="jobby-joblists-empty-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no product"
        />
        <h2>No Jobs Found</h2>
        <p className="jobby-joblists-empty-text">
          We could not find any jobs. Try other filters
        </p>
      </div>
    );
}

export default EmptyView;