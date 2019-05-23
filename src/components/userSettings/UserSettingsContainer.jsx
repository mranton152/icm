import React from "react";
import { connect } from "react-redux";
// import constants from "../../store/actionTypes";
import { Modal, Button, Row, Col, Tooltip, Checkbox } from "antd";

// const { SETTINGS } = constants;
class UserSettingsContainer extends React.Component {
  // state = { defaultPage: null };

  handleOk = () => {
    this.props.postSettings(this.state.settings);
    this.props.handleOk();
  };

  handleCancel = () => {
    const { settings } = this.props;
    this.setState({ settings: settings });
    this.props.handleCancel();
  };

  componentWillMount() {
    const { settings } = this.props;
    this.setState({
      settings: settings
      //  defaultPage: meData.homePage
    });
  }
  render() {
    const { visible, loading } = this.props;
    return (
      <Modal
        visible={visible}
        title="Settings"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.handleOk}
          >
            Submit
          </Button>
        ]}
      >
        Здесь скоро будут настройки...
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
