import React from "react";
import { Row, Col, Card } from "antd";

class IndicatorsContainer extends React.Component {
  render() {
    return (
      <div className="App">
        Область 1<div />
        <div style={{ padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Температура" bordered={false}>
                37°С
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Давление" bordered={false}>
                10 Pa
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Влажность" bordered={false}>
                12%
              </Card>
            </Col>
          </Row>
        </div>{" "}
        Облать 2
        <div style={{ padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Температура" bordered={false}>
                12°С
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Давление" bordered={false}>
                10 Pa
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Влажность" bordered={false}>
                12%
              </Card>
            </Col>
          </Row>
        </div>{" "}
        Область 3
        <div style={{ padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Температура" bordered={false}>
                12°С
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Давление" bordered={false}>
                10 Pa
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Влажность" bordered={false}>
                12%
              </Card>
            </Col>
          </Row>{" "}
        </div>{" "}
        Область 4
        <div style={{ padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Температура" bordered={false}>
                12°С
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Давление" bordered={false}>
                10 Pa
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Влажность" bordered={false}>
                12%
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default IndicatorsContainer;
