import React from "react";
import "antd/dist/antd.css";
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const tabList = [
  {
    key: "tab1",
    tab: "tab1",
  },
  {
    key: "tab2",
    tab: "tab2",
  },
];
class CourseContainer extends React.Component {
  render() {
    return (
      <Card title="Обучающие курсы">
        {/* <Card
          style={gridStyle}
          hoverable
          cover={<img alt="example" src="/img/py.png" />}
        >
          <Meta title="Программирование" description="" />
        </Card>
        <Card
          style={gridStyle}
          hoverable
          cover={<img alt="example" src="/img/sql.png" />}
        >
          <Meta title="Основы SQL" description="" />
        </Card> */}
        {/* <Card
          style={gridStyle}
          hoverable
          cover={<img alt="example" src="/img/seti.png" />}
        >
          <Meta title="Администрирование сети" description="" />
        </Card> */}

        <Card.Grid style={gridStyle}>Основы SQL</Card.Grid>
        <Card.Grid style={gridStyle}>Администрирование сети</Card.Grid>
        <Card.Grid style={gridStyle}>Основы программирования</Card.Grid>
        <Card.Grid style={gridStyle}>Программирование на Python</Card.Grid>

        <Card.Grid style={gridStyle}>
          Введение в Data Science и машинное обучение
        </Card.Grid>
        <Card.Grid style={gridStyle}>Нейронные сети</Card.Grid>
        <Card.Grid style={gridStyle}> Программирование на Golang</Card.Grid>
        <Card.Grid style={gridStyle}>
          Математика для Data Science. Теория вероятностей
        </Card.Grid>
        <Card.Grid style={gridStyle}>Ифнорматика</Card.Grid>
        <Card.Grid style={gridStyle}>
          Разработка мобильных приложений для Android
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Задачи для изучения языка Kotlin
        </Card.Grid>
        <Card.Grid style={gridStyle}>Игрофикация. Введение</Card.Grid>
      </Card>
    );
  }
}
export default CourseContainer;
