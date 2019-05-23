import React from "react";
import { Table } from "antd";

const deviceData = [
  {
    key: "1",
    number: "5616165",
    ID: "6F1A45",
    status: "Эксплуатируется",
    place: "Холодильник",
    settings: "min -4°С / max 0°С",
    current: "-3°С"
  },
  {
    key: "2",
    number: "5312165",
    ID: "1351FHS1",
    status: "Эксплуатируется",
    place: "Холодильник",
    settings: "min -20°С / max 50°С",
    current: "-19°С"
  },
  {
    key: "3",
    number: "51246165",
    ID: "XF1225",
    status: "Эксплуатируется",
    place: "Офис",
    settings: "min 0°С / max 30°С",
    current: "28°С"
  }
];
class SensorsContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <Table
          pagination={false}
          style={{ padding: "30px" }}
          agination={false}
          style={{ padding: "30px" }}
          dataSource={deviceData}
        >
          <deviceColumns
            title="Серийный номер"
            dataIndex="number"
            key="Серийный номер"
          />
          <deviceColumns title="ID модели" dataIndex="ID" key="ID модели" />
          <deviceColumns title="Статус" dataIndex="status" key="Статус" />
          <deviceColumns
            title="Место хранения"
            dataIndex="place"
            key="Место хранения"
          />
          <deviceColumns
            title="Параметры"
            dataIndex="settings"
            key="Параметры"
          />
          <deviceColumns
            title="Текущие показания"
            dataIndex="current"
            key="Текущие показания"
          />
        </Table>
      </div>
    );
  }
}

export default SensorsContainer;
