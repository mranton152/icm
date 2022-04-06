import React from "react";
import "antd/dist/antd.css";
import { Table, Statistic, Card, Row, Col, Icon, Divider, Tag } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const { Column } = Table;

const data = [
  {
    key: "1",
    name: "Газпром",
    spec: "Глобальная энергетическая компания",
    open: 32,
    address: "ул. 50 Лет Октября, 8Б, Тюмень",
    tags: ["разработчик"],
    logo: "logo_gaz.jpg",
    site: "https://www.gazprom.ru/",
  },
  {
    key: "2",
    name: "Creative",
    spec: "Аутсорс digital-интегратор web и мобильной разработки",
    open: 25,
    address: "БЦ Нобель Парк, Тюмень",
    tags: ["дизайнер"],
    logo: "logo_creative.png",
    site: "https://crtweb.ru/",
  },
  {
    key: "3",
    name: "ООО Тюмень-Софт",
    spec: "Крупнейший партнер фирмы «1С»",
    open: 10,
    address: "БЦ Овентал Тауэр, Тюмень",
    tags: ["IT-архитектор"],
    logo: "logo_soft.jpg",
    site: "https://www.tyumen-soft.ru/",
  },
];

class CompanyContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Открылось вакансий за последнюю неделю"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Закрыто вакансий за последнюю неделю"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
        Отет по предприятиям
        <Table dataSource={data}>
          <Column
            title=""
            dataIndex="logo"
            key="logo"
            render={(text, record) => (
              <span>
                <img
                  alt="example"
                  src={"/img/" + record.logo}
                  height="40px"
                  width="40px"
                />
              </span>
            )}
          />
          <Column title="Название" dataIndex="name" key="name" />
          <Column title="Специализация" dataIndex="spec" key="spec" />
          <Column title="Открыто вакансий" dataIndex="open" key="open" />
          <Column title="Адрес" dataIndex="address" key="address" />
          <Column
            title="Теги"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <span>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Действия"
            key="action"
            render={(text, record) => (
              <span>
                <a target="_blank" rel="noopener noreferrer" href={record.site}>
                  Перейти
                </a>
                <Divider type="vertical" />
                <Icon type="heart" />
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}
export default CompanyContainer;
