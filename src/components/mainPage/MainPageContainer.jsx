import React from "react";
import { Row, Col } from "antd";
import MainPageList from "./MainPageList";
import MyBoardContainer from "./myBoard/MyBoardContainer";
// import HelpChatContainer from "./helpChat/HelpChatContainer";
// import { connect } from "react-redux";
// import constants from "../../store/actionTypes";

class MainPageContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getDate();
  //   this.props.getDateOfFixedList();
  // }
  render() {
    const AreasData = {
      total: 4,
      list: [
        {
          title: "Тестирование",
          description:
            "Пройдите тестирование для оценки ваших навыков",
          syncData: [
            { title: "Тестирование", date: "21.03.24" },
            // { title: "Wet", date: "11.09.19" },
            // {
            //   title: "Pressure",
            //   date: "10.09.19",
            // },
          ],
          img: "/img/testing.jpg",
          link: "/test",
        },        {
          title: "Результаты тестирования",
          description:
            "Просмотрите результаты вашего тестирования",
          syncData: [
            { title: "Тестирование", date: "21.03.24" },
            // { title: "Wet", date: "11.09.19" },
            // {
            //   title: "Pressure",
            //   date: "10.09.19",
            // },
          ],
          img: "/img/results.jpg",
          link: "/results",
        },
        {
          title: "Курсы",
          description:
            "Все обучающие курсы, которые помогут освоить основные стандарты IT-направлений",
          syncData: [
            { title: "Temperature", date: "11.09.19" },
            // { title: "Wet", date: "11.09.19" },
            // {
            //   title: "Pressure",
            //   date: "10.09.19",
            // },
          ],
          img: "/img/courses.jpg",
          link: "/courses",
        },
        {
          title: "Направления",
          description:
            "Структура направлений, стандартов, дисциплин и курсов в системе обучения",
          syncData: [{ title: "Data base", date: "05.09.19" }],
          img: "/img/directions.jpg",
          link: "/directions",
        },
        {
          title: "Оценки",
          description: "Прогресс обучающегося",
          syncData: [{ title: "Grafana", date: "09.09.19" }],
          img: "/img/progress.jpg",
          link: "/progress",
        },

        {
          title: "Предприятия",
          description: "Рейтинг работодателей, предложения о работе",
          syncData: [{ title: "Data base", date: "05.09.19" }],
          img: "/img/companies.jpg",
          link: "/companies",
        },
      ],
    };
    return (
      <Row>
        <Col span={16}>
          <MainPageList AreasData={AreasData} />
        </Col>
        <Col md={{ span: 7, offset: 1 }}>
          <MyBoardContainer />
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
