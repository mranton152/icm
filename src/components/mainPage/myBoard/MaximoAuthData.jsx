import React from "react";
import { Modal, Form, Input } from "antd";

const FormItem = Form.Item;

class MaximoAuthData extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const handleCreate = () => {
      const form = this.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        this.props.handleSend(values);
        // console.log("Received values of form: ", values);
        form.resetFields();
        this.setState({ visible: false });
      });
    };
    return (
      <Modal
        visible={this.props.visible}
        title="Please input MAXIMO auth data"
        onCancel={this.props.handleHideModal}
        onOk={() => {
          handleCreate();
          this.props.handleHideModal();
        }}
      >
        <Form>
          <FormItem label="Alias">
            {getFieldDecorator("alias", {
              rules: [
                {
                  required: true,
                  message: "Please input your LDAP Alias!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your LDAP password"
                }
              ]
            })(<Input type="password" />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(MaximoAuthData);
