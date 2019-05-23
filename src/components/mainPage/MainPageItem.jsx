import React from "react";
import { Link } from "react-router-dom";
import { List, Avatar, Icon } from "antd";
import dayjs from "dayjs";
dayjs.locale("en");
class MainPageItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Link to={item.link} className="selectable">
        <List.Item
          className="pa-20 white-background"
          style={{ padding: "20px" }}
          key={item.title}
          actions={["Last updated: "].concat(
            item.syncData.map(el => (
              <IconText
                type="sync"
                // text={`${el.title} : ${dayjs(el.date).format(
                //   "DD/MM/YYYY HH:mm"
                // )}`}
                text={`${el.title} : ${el.date}`}
              />
            ))
          )}
          extra={<img width={272} alt="logo" src={item.img} />}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.img} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      </Link>
    );
  }
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default MainPageItem;
