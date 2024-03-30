import React from "react";
import { Layout } from "antd";
import MainContainerMenu from "./MainContainerMenu";
import MainContainerContent from "./MainContainerContent";
import SigninContainer from "../account/signin/SigninContainer";
import MainPageContainer from "../mainPage/MainPageContainer";
// import Notification from "../atoms/Notify";
import { connect } from "react-redux";
// import constants from "../../store/actionTypes";
import { BrowserRouter as Router } from "react-router-dom";
// import LoadingCogs from "../atoms/LoadingCogs";

// const { ACCOUNT, SETTINGS } = constants;
const { Content, Footer, Sider } = Layout;
class MainContainerLayout extends React.Component {
  // componentDidMount() {
  //   this.props.getSettings();
  // }
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    // if (!this.props.settingsSolved) return <LoadingCogs />;
    // else
    return (
      <Router>
        <Layout style={{ minHeight: "200vh" }}>
          {/* <Notification /> */}
          <Sider
            // className="corporate-background"
            // style={{
            //   position: "fixed",
            //   zIndex: 10,
            //   width: "100%"
            // }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            {/* {this.props.logined ? ( */}
            <MainContainerMenu {...this.props} />
            {/* ) : ( */}
            {/* <div className="logo">
              <img src="./../../logo.svg" alt="logo" />
            </div> */}
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px", marginTop: 10 }}>
              {/* {this.props.logined ? ( */}
              <MainContainerContent key="2" />
              {/* <MainPageContainer /> */}
              {/* ) : ( */}
              {/* <SigninContainer /> */}
              {/* )} */}
            </Content>

            <Footer
              style={{
                textAlign: "center",
                height: 100,
              }}
            >
              ТИУ ©2024 ВШЦТ
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({
//   account: state.account || {},
//   logined: state.account.logined || false,
//   settingsSolved: state.settings.solved
// });

// const mapDispatchToProps = dispatch => ({
//   logOut: () => dispatch({ type: ACCOUNT.LOGOUT.REQUEST }),
//   getSettings: () => dispatch({ type: SETTINGS.GET.REQUEST })
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MainContainerLayout);
export default MainContainerLayout;
