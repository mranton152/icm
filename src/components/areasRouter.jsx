import React from "react";
import MainPageContainer from "./mainPage/MainPageContainer";
import { Route, Switch } from "react-router-dom";
import ReportsContainer from "./reports/ReportsContainer";
import IndicatorsContainer from "./indicators/IndicatorsContainer";
import SensorsContainer from "./sensors/SensorsController";
class AreasRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route key="0" exact path="/" component={MainPageContainer} />
        <Route
          key="1"
          exact
          path="/indicators"
          component={IndicatorsContainer}
        />
        <Route key="2" exact path="/sensors" component={SensorsContainer} />
        <Route key="4" exact path="/reports" component={ReportsContainer} />
      </Switch>
    );
  }
}

export default AreasRouter;
