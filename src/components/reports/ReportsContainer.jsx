import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
const raportColumns = [
  {
    title: "Наименование отчета",
    dataIndex: "name"
  },
  {
    title: "Дата создания",
    dataIndex: "data"
  },
  {
    title: "Статус",
    dataIndex: "status1"
  },
  {
    title: "Управление",
    dataIndex: "controls"
  }
];

const raportData = [
  {
    key: "1",
    name: "Отчет по безопасности",
    data: "12.01.2028",
    status1: "На проверке",
    controls: "Хз че тут"
  }
];

class AdditionalContainer extends React.Component {
  render() {
    return (
      <div className="App">
        Отет по тревогам
        <Table
          pagination={false}
          style={{ width: 1520, padding: "30px" }}
          columns={raportColumns}
          size="middle"
          dataSource={raportData}
        >
          <raportColumns title="Наименование отчета" dataIndex="name" />
          <raportColumns title="Дата создания" dataIndex="data" />
          <raportColumns title="Статус" dataIndex="status1" />
          <raportColumns title="Управление" dataIndex="controls" />
        </Table>
      </div>
    );
  }
}
export default AdditionalContainer;
