import React from "react";
import { Breadcrumb } from "antd";
import { withRouter, Link } from "react-router-dom";

class MainContainerBreadcrumbs extends React.Component {
  render() {
    const pathArray = ["Main"].concat(
      separatePath(this.props.location.pathname)
    );
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        {pathArray.map((el, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={makeLink(index, pathArray)}>{el}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
}

const separatePath = path => {
  return path.split("/").filter(el => el !== "");
};

const makeLink = (index, pathArray) => {
  let link = "/";
  for (let i = 1; i <= index; i++) {
    link += pathArray[i] + "/";
  }
  return link;
};

export default withRouter(MainContainerBreadcrumbs);
