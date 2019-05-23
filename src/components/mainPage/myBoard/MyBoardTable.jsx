import React from "react";
import { Table, List } from "antd";

const { Column } = Table;
const { Item } = List;

class MyBoardTable extends React.Component {
  render() {
    const data = this.props.data;
    return window.innerWidth > 1600 ? (
      <Table
        dataSource={data}
        pagination={false}
        showHeader={false}
        className="mt-12"
      >
        <Column dataIndex="first" key="first" />
        <Column dataIndex="second" key="second" />
      </Table>
    ) : (
      <List>
        {data.map((el, ind) => (
          <Item key={ind}>
            {el.first} <br />
            {el.second} <br />
          </Item>
        ))}
      </List>
    );
  }
}

export default MyBoardTable;
