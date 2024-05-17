import React from "react";
import { connect } from "react-redux";
// import constants from "../../store/actionTypes";
import { Modal, Button, Row, Col, Tooltip, Checkbox, Input } from "antd";
import UploadAvatar from "./UploadAvatar";

// const { SETTINGS } = constants;
class UserSettingsContainer extends React.Component {
  // state = { defaultPage: null };
  state = {
    user: {name: 'userName', secondName: 'userSecondName', middleName: 'userMiddleName', email: 'email.ru', password: 'xxx'},
    inputData: {name: 'userName', secondName: 'userSecondName', middleName: 'userMiddleName', email: 'email.ru', password: 'xxx'},
  };

  handleOk = () => {
    this.setState({user: this.state.inputData });
    this.props.handleOk();
  };

  handleCancel = () => {
    const { settings } = this.props;
    this.setState({ settings: settings,  inputData: this.state.user });
    this.props.handleCancel();
  };

  componentWillMount() {
    const { settings } = this.props;
    this.setState({
      settings: settings
      //  defaultPage: meData.homePage
    });
  }

  dataChange = (e) => {  
    this.setState({inputData: {...this.state.inputData, [e.target.name]: e.target.value}})
  }

  render() {
    const { visible, loading } = this.props;

    return (
      <Modal
        visible={visible}
        title="Настройки"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Отмена
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.handleOk}
          >
            Сохранить
          </Button>
        ]}
      >

      <div style ={{display: 'flex', justifyContent: 'flex-start'}}>
        <div style = {{textAlign: 'left'}}>
        <UploadAvatar/>
        </div>
        
        <div>
        <Input style = {{marginBottom: '10px'}} value = {this.state.inputData.name} name = "name" placeholder = "Имя" onChange={this.dataChange}/>
        <Input style = {{marginBottom: '10px'}} value = {this.state.inputData.secondName} name = "secondName" placeholder = "Фамилия" onChange={this.dataChange}/>
        <Input style = {{marginBottom: '10px'}} value = {this.state.inputData.middleName} name = "middleName" placeholder = "Отчество" onChange={this.dataChange}/>
        <Input style = {{marginBottom: '10px'}} value = {this.state.inputData.email} name = "email" placeholder = "Email" onChange={this.dataChange}/>

        <Input style = {{marginBottom: '10px'}} name = "password" placeholder = "Сменить пароль" onChange={this.dataChange}/>
        </div>
      </div>
        
        
      </Modal>
    );
  }
}

// const mapStateToProps = state => ({
//   meData: state.account.meData || {},
//   settings: state.settings.data
// });

// const mapDispatchToProps = dispatch => ({
//   getSettings: () => dispatch({ type: SETTINGS.GET.REQUEST }),
//   postSettings: settings =>
//     dispatch({ type: SETTINGS.POST.REQUEST, payload: { settings } }),
//   settingsToDefault: () => dispatch({ type: SETTINGS.DEFAULT.REQUEST })
// });

export default UserSettingsContainer; 
// export {inputValue, inputName};
