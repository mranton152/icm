import React from "react";
import MainContainerMenuList from "./MainContainerMenuList";
import { Popover, Row, Col } from "antd";
import { Link } from "react-router-dom";
class MainContainerMenuMobile extends React.Component {
  state = {
    menuVisible: false,
  };
  handleMenuVisibility = (menuVisible) => {
    this.setState({ menuVisible });
  };
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Link to="/" style={{ display: "inline-block" }}>
            <img src="/logo.jpg" alt="logo" />
          </Link>
        </Col>
        <Col xs={12}>
          <Popover
            content={
              <MainContainerMenuList
                // whenever the Menu item is clicked, hide the Popover
                onLinkClick={() => this.handleMenuVisibility(false)}
                // pass the proper activeLinkKey (this comes from React Router's props.location.pathname)
                activeLinkKey={this.props.activeLinkKey}
                mobileVersion={true}
                // className='to-override-mobile-menu-class'
                {...this.props}
              />
            }
            trigger="click"
            placement="bottomRight"
            visible={this.state.menuVisible}
            onVisibleChange={this.handleMenuVisibility}
          >
            <i className="iconHamburger" style={{ float: "right" }} />
          </Popover>
        </Col>
      </Row>
    );
  }
}

export default MainContainerMenuMobile;
