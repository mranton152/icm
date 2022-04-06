import React from "react";
import { Card, Row, Col, Button, Icon } from "antd";
import { connect } from "react-redux";
import LetterAvatar from "../../atoms/LetterAvatar";
import LoadingCogs from "../../atoms/LoadingCogs";
// import MaximoAuthData from "./MaximoAuthData";
// import XR200UpdateForm from "./XR200UpdateForm";
// import constants from "../../../store/actionTypes";
import MyBoardTable from "./MyBoardTable";
import { Link } from "react-router-dom";
// const { ASSETS } = constants;
const today = new Date();
class MyBoardContainer extends React.Component {
  state = { maximoAuthVisible: false, xr200visible: false };

  handleHideModal = () => {
    this.setState({ maximoAuthVisible: false });
  };

  handleHideXr200 = () => {
    this.setState({ xr200visible: false });
  };

  render() {
    const { account } = this.props;
    // const { meData } = account;
    const data = [
      {
        key: "1",
        first: "Сегодня",
        second:
          today.getDate() +
          "." +
          (today.getMonth() + 1) +
          "." +
          today.getFullYear(),
      },
      // {
      //   key: "2",
      //   first: "Tickets to TOP Help",
      //   second: "0"
      // },
      // {
      //   key: "3",
      //   first: "Default page",
      //   second: "Home"
      // },
      {
        key: "4",
        first: "Загрузить сертификат",
        second: (
          <Button
            onClick={() => {
              this.setState({ maximoAuthVisible: true });
            }}
          >
            <Icon type="sync" /> Загрузить
          </Button>
        ),
      },
      {
        key: "5",
        first: "Перейти в профиль",
        second: (
          <Button
            onClick={() => {
              this.setState({ xr200visible: true });
            }}
          >
            <Link to="/user">
              {" "}
              <Icon type="book" />
              Профиль
            </Link>
          </Button>
        ),
      },
    ];
    return (
      <Card
        style={{ marginBottom: "35px" }}
        title={
          <Row className={`card-header-wrapper`} type="flex" align="middle">
            <Col span={18}>Моя доска</Col>
            <Col span={6} className="align-right" />
          </Row>
        }
      >
        <Row>
          <Col span={6} className="pl-5">
            <LetterAvatar name="Дарья" size={50} radius={25} />
          </Col>
          <Col span={18} className="mt-12">
            <span>Здравствуйте, Дарья!</span>
          </Col>
        </Row>
        <MyBoardTable data={data} />
        {/* <MaximoAuthData
          visible={this.state.maximoAuthVisible}
          handleHideModal={this.handleHideModal}
          handleSend={this.props.updateMaximo}
        /> */}
        {/* <XR200UpdateForm
          visible={this.state.xr200visible}
          handleHideModal={this.handleHideXr200}
          handleSend={this.props.sendFixedList}
        /> */}
      </Card>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   updateMaximo: data =>
//     dispatch({ type: ASSETS.UPDATE_MAXIMO.REQUEST, payload: { data } })
// });

// const mapStateToProps = state => ({
//   account: state.account
// });

export default MyBoardContainer;
