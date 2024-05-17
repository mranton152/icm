import React, {useState} from "react";
import "antd/dist/antd.css";
import { Icon, Button, Avatar} from 'antd';
import UserSettingsContainer from "../userSettings/UserSettingsContainer";


class UserContainer extends React.Component {
  state = {
    loading: false,
    visible: false,
    user: {name: 'userName', secondName: 'userSecondName', middleName: 'userMiddleName', email: 'email.ru', password: 'xxx'}
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true});
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    });
  };

  handleCancel = () => {
    this.setState({ visible: false});
  }; 
  
  render() {       
    return <div className="App">
      <h1 style = {{color: 'black', textAlign: 'left'}}>Профиль</h1>
      <div style ={{display: 'flex', justifyContent: 'flex-start', marginTop: '30px'}}>
        <div  style ={{textAlign: "left"}}>
        <Avatar shape="square" size={170} icon="user" />
          <div style ={{textAlign: 'left', marginTop: '10px'}}>
          <Button type ='text' style ={{width: "170px"}} onClick={this.showModal}><Icon type="setting" />Настройки</Button>
          </div> 
        </div>

        <div style = {{marginLeft: "40px"}}>
            <p style = {{textAlign: 'left', border: '1px solid black', padding: '5px 10px', width: '400px', borderRadius: '15px'}}>{this.state.user.name}</p>
            <p style = {{textAlign: 'left', border: '1px solid black', padding: '5px 10px', width: '400px', borderRadius: '15px'}}>{this.state.user.secondName}</p>
            <p style = {{textAlign: 'left', border: '1px solid black', padding: '5px 10px', width: '400px', borderRadius: '15px'}}>{this.state.user.middleName}</p>
            <p style = {{textAlign: 'left', border: '1px solid black', padding: '5px 10px', width: '400px', borderRadius: '15px'}}>{this.state.user.email}</p>
        </div>
        
      </div>

      <UserSettingsContainer
          visible={this.state.visible}
          loading={this.state.loading}
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
        />
      
    </div>;
  }
}
export default UserContainer;
