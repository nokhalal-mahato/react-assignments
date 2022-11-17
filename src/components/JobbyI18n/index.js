import { Route, Switch,withRouter } from "react-router-dom";
import './index.css'
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";
import { useTranslation } from "react-i18next";

const JobbyI18n = () => {
  const {t,i18n}=useTranslation();
  const onChangeLanguage=(event)=>{
    i18n.changeLanguage(event.target.value);
  }
  return (
    <>
      <select className="changeLanguage" onChange={onChangeLanguage}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <Switch>
        <Route exact path="/JobbyI18n/login" component={Login} />
        <ProtectedRoute exact path="/JobbyI18n" component={Home} />
        <ProtectedRoute exact path={`/JobbyI18n/jobs`} component={Jobs} />
        <ProtectedRoute
          exact
          path={`/JobbyI18n/jobs/:id`}
          component={withRouter(JobDetailRoute)}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default JobbyI18n;
