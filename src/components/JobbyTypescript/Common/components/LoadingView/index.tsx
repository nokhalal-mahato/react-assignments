import { ThreeDots } from "react-loader-spinner";
import './index.css'

const LoadingView = () => {
  return (
    <div className="jobby-joblists-loader-container">
      <ThreeDots color="white" height={80} width={80} />
    </div>
  );
};
export default LoadingView;
