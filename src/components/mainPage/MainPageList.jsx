import React from "react";
import { List } from "antd";
import { Divider } from "antd";
import MainPageItem from "./MainPageItem";

class MainPageList extends React.Component {
  render() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        dataSource={this.props.AreasData.list}
        renderItem={item => [
          <MainPageItem item={item} key={item.title} />,
          <Divider key={item.description} />
        ]}
      />
    );
  }
}

export default MainPageList;
