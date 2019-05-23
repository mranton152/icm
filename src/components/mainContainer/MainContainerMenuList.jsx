import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import UserSettingsContainer from "../userSettings/UserSettingsContainer";
import { withRouter } from "react-router-dom";
const { SubMenu } = Menu;

class MainContainerMenuList extends React.Component {
  state = {
    loading: false,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const location =
      this.props.history.location.pathname.split("/")[1] || "main";
    const { mobileVersion, account } = this.props;
    // const { meData } = account;
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={[location]}
        // style={{ lineHeight: "64px" }}
        // className="corporate-background"
        mode={mobileVersion ? "horizontal" : "vertical"}
      >
        {!this.props.mobile && (
          <Menu.Item key="logo">
            <Link to="/">
              <Icon type="android" />
            </Link>
          </Menu.Item>
        )}
        <Menu.Item key="main" className=" wf">
          <Link to="/">
            <Icon type="robot" />
            <span>ICM</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="indicators">
          <Link to="/indicators">
            <Icon type="tablet" theme="outlined" />
            <span>Показатели</span>{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="senrors">
          <Link to="/sensors">
            <Icon type="tablet" theme="outlined" />
            <span>Устройства</span>{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="statistic">
          <Link to="/statistic">
            <Icon type="line-chart" />
            <span>Статистика</span>{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="reports">
          <Link to="/reports">
            <Icon type="file-text" theme="outlined" /> <span>Отчёты</span>{" "}
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          // style={{ float: "right" }}
          title={
            <span>
              <Icon type="user" />
              <span>Антон</span>
              {/* <span>{meData && meData.firstName}</span> */}
            </span>
          }
        >
          <Menu.Item key="settings" onClick={this.showModal}>
            Настройки
          </Menu.Item>
          <Menu.Item key="reports">Отчёты</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="exit" onClick={this.props.logOut}>
            <Icon type="logout" />
            Выйти
          </Menu.Item>
        </SubMenu>
        <UserSettingsContainer
          key="set"
          visible={this.state.visible}
          loading={this.state.loading}
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
        />
      </Menu>
    );
  }
}

export default withRouter(MainContainerMenuList);
