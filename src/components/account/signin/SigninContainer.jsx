import React from "react";
import { Row, Col, Card } from "antd";
import SigninForm from "./SigninForm";
// import constants from "../../../store/actionTypes";
// import { connect } from "react-redux";
// import LoadingCogs from "../../atoms/LoadingCogs";
// const { ACCOUNT } = constants;

class SigninContainer extends React.Component {
  render() {
    return (
      <Row>
        <br />
        <Col lg={{ span: 16, offset: 4 }} xs={{ span: 24 }}>
          {/* <Card
            title={
              <Row className={`card-header-wrapper`} type="flex" align="middle">
                <Col span={18}>Уважаемые сотрудники OPC!</Col>
              </Row>
            }
          >
            <p>
              IT команда OPC запускает новую версию системы TOPC. Это необходимо
              для дальнейшего развития инструмента, улучшения стабильности,
              скорости и удобства работы с данным программным обеспечением.
            </p>
            <p>
              С понедельника (17 сентября) по пятницу (21 сентября) возможны
              перебои работы программы. Недоступный функционал будет введен в
              работу в кратчайшем времени. Данная ситуация является НОРМАЛЬНОЙ в
              жизненном цикле любого крупного приложения. Просим Вас, при
              нештатном поведении системы записать, в каких условиях и при каких
              действиях возникла ошибка и сообщить об этом IT-команде.
            </p>
            <p />
            <p>
              Для доступа к системе используйте те же учетные записи, что и
              раньше.
            </p>
          </Card> */}
        </Col>
        <Col
          lg={{ span: 8, offset: 8 }}
          xs={{ span: 24 }}
          justify="center"
          align="top"
        >
          <Card
            title={
              <Row className={`card-header-wrapper`} type="flex" align="middle">
                <Col span={18}>Пожалуйста, авторизуйтесь</Col>
              </Row>
            }
            style={{ marginTop: "20px" }}
          >
            {/* {this.props.loading ? (
              <LoadingCogs />
            ) : ( */}
            <SigninForm
            // signIn={this.props.signIn}
            // meData={this.props.account.meData}
            />
            {/* )} */}
          </Card>
        </Col>
      </Row>
    );
  }
}

// const mapStateToProps = state => ({
//   account: state.account,
//   loading: state.account.signInLoading,
//   meData: state.account.meData || {}
// });
// const mapDispatchToProps = dispatch => ({
//   signIn: data => dispatch({ type: ACCOUNT.POST.REQUEST, payload: { data } })
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SigninContainer);
export default SigninContainer;
