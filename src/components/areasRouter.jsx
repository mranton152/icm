import React from "react";
import MainPageContainer from "./mainPage/MainPageContainer";
import { Route, Switch } from "react-router-dom";
import CourseContainer from "./courses/CourseContainer";
import ProgressContainer from "./progress/ProgressContainer";
import DirectionContainer from "./directions/DirectionContainer";
import CompanyContainer from "./companies/CompanyContainer";
import UserContainer from "./user/UserContainer";
import TestingContainer from "./testing/TestingContainer";
import ResultsContainer from "./results/ResultsContainer";
class AreasRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route key="0" exact path="/" component={MainPageContainer} />
        <Route key="1" exact path="/courses" component={CourseContainer} />
        <Route key="2" exact path="/progress" component={ProgressContainer} />
        <Route
          key="3"
          exact
          path="/directions"
          component={DirectionContainer}
        />
        <Route key="4" exact path="/companies" component={CompanyContainer} />
        <Route key="5" exact path="/user" component={UserContainer} />
        <Route key="6" exact path="/testing" component={TestingContainer} />
        <Route key="7" exact path="/results" component={ResultsContainer} />
      </Switch>
    );
  }
}

export default AreasRouter;
