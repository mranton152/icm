import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;
class SigninFormUnwrapped extends React.Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields(async (err, values) => {
  //     if (!err) {
  //       this.props.signIn(values);
  //     }
  //   });
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        // onSubmit={this.handleSubmit}
        className="login-form"
      >
        <FormItem label="Login">
          {getFieldDecorator("login", {
            rules: [{ required: true, message: "Please input your login!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Login"
            />
          )}
        </FormItem>
        <FormItem label="Password">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Запомнить меня</Checkbox>)}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Войти
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SingupForm = Form.create()(SigninFormUnwrapped);

export default SingupForm;
