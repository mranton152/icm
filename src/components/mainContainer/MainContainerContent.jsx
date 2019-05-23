import React from "react";
import MainContainerBreadcrumbs from "./MainContainerBreadcrumbs";
import AreasRouter from "../areasRouter";
class MainContainerContent extends React.Component {
  render() {
    return (
      <span>
        <MainContainerBreadcrumbs key="1" list={["Main", "Projects", "List"]} />
        <AreasRouter />
      </span>
    );
  }
}

export default MainContainerContent;
