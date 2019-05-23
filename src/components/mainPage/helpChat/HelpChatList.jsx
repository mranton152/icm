import React from "react";
import { Table, List } from "antd";
import dayjs from "dayjs";
import "./HelpChat.css";
dayjs.locale("en");
const Column = Table.Column;
const { Item } = List;
const makeTicketStatus = numStatus => {
  switch (numStatus) {
    case 0:
      return "Opened";
    case 1:
      return "New message!";
    case 2:
      return "Closed";
    default:
      return "Opened";
  }
};

class HelpChatList extends React.Component {
  state = { resize: null };
  render() {
    const ticketList = this.props.data;
    const { loading } = this.props;
    const data = ticketList.map((el, ind) => ({
      key: ind,
      color:
        el.status === 1
          ? "help-status-b"
          : el.priority === 0 || el.status === 2
          ? "overall-status-w"
          : el.priority === 1
          ? "help-status-y"
          : el.priority === 2
          ? "help-status-r"
          : "help-status-g",
      first: (
        <p
          style={{ color: "#1890ff", cursor: "pointer" }}
          onClick={() => {
            this.props.handleShowTicketBody(el.ticketId);
          }}
        >
          {el.topic}
        </p>
      ),
      second: dayjs(el.CreatedAt).format("DD/MM/YYYY HH:mm"),
      third: makeTicketStatus(el.status)
    }));

    return window.innerWidth > 1600 ? (
      <Table
        dataSource={data}
        pagination={false}
        showHeader={false}
        loading={loading}
        style={{ height: this.props.height || "150px", overflowY: "auto" }}
        rowClassName={record => record.color}
      >
        <Column dataIndex="first" key="first" title="Topic" />
        <Column dataIndex="second" key="second" title="Created at" />
        <Column dataIndex="third" key="third" title="Status" />
      </Table>
    ) : (
      <List>
        {data.map((el, ind) => (
          <Item className={el.color} key={ind}>
            {el.first} <br />
            {el.second} <br />
            {el.third}
          </Item>
        ))}
      </List>
    );
  }
}

export default HelpChatList;
