import React from "react";
import { Row, Col } from "antd";
import MainPageList from "./MainPageList";
import MyBoardContainer from "./myBoard/MyBoardContainer";
// import HelpChatContainer from "./helpChat/HelpChatContainer";
import { connect } from "react-redux";
// import constants from "../../store/actionTypes";

// const { ASSETS } ы= constants;
class MainPageContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getDate();
  //   this.props.getDateOfFixedList();
  // }
  render() {
    const AreasData = {
      total: 3,
      list: [
        {
          title: "Показатели",
          description: "Отображение данных в реальном времени",
          syncData: [{ title: "Indicators", date: "05.09.19" }],
          img: "/img/indicator.jpg",
          link: "/reports"
        },
        {
          title: "Устройства",
          description:
            "Все устройства, измеряющие основные показатели на производстве, и данные с них в режиме реального времени",
          syncData: [
            { title: "Temperature", date: "11.09.19" },
            { title: "Wet", date: "11.09.19" },
            {
              title: "Pressure",
              date: "10.09.19"
            }
          ],
          img: "/img/sensor.jpg",
          link: "/sensors"
        },
        {
          title: "Статистика",
          description:
            "Собранные данные с датчиков, представленные в виде графиков",
          syncData: [{ title: "Grafana", date: "09.09.19" }],
          img: "/img/stat.jpg",
          link: "/statistic"
        },
        {
          title: "Отчёты",
          description: "Выгрузка данных в удобном формате",
          syncData: [{ title: "Data base", date: "05.09.19" }],
          img: "/img/reports.jpg",
          link: "/reports"
        }
      ]
    };
    return (
      <Row>
        <Col
        //  md={16}
        >
          <MainPageList AreasData={AreasData} />
        </Col>
        <Col md={{ span: 7, offset: 1 }}>
          {/* <MyBoardContainer /> */}
          {/* <HelpChatContainer /> */}
        </Col>
      </Row>
    );
  }
}

// const mapStateToProps = state => ({
//   maximoUpdate: state.assets.maximoUpdate || {},
//   fixedListUpdated: state.assets.fixedAssets || {}
// });

// const mapDispatchToProps = dispatch => ({
//   getDate: () => dispatch({ type: ASSETS.UPDATE_MAXIMO.DATE.REQUEST }),
//   getDateOfFixedList: () => dispatch({ type: ASSETS.FIXED_ASSETS.GET.REQUEST })
// });

export default MainPageContainer;
