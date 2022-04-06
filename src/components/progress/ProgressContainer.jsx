import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";

const { Step } = Steps;

class ProgressContainer extends React.Component {
  render() {
    return (
      <Steps current={1}>
        <Step title="Закончено" description="Регистрация" />
        <Step
          title="В процессе"
          subTitle="Времени ушло 00:15:08"
          description="Обучение курса по программированию"
        />
        <Step title="Ожидание" description="Загрузка сертификата" />
      </Steps>
    );
  }
}
export default ProgressContainer;
