import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";
import "./index.css";


const JobbyTypescriptI18n = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <>
      <select
        className="changeLanguage"
        onChange={onChangeLanguage}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <Switch>
        <Route exact path="/JobbyTypescriptI18n/login" component={Login} />
        <ProtectedRoute exact path="/JobbyTypescriptI18n" component={Home} />
        <ProtectedRoute
          exact
          path={`/JobbyTypescriptI18n/jobs`}
          component={Jobs}
        />
        <ProtectedRoute
          exact
          path={`/JobbyTypescriptI18n/jobs/:id`}
          component={withRouter(JobDetailRoute)}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default JobbyTypescriptI18n;
