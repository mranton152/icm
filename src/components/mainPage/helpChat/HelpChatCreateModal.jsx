import React from "react";
import { Form, Input, Upload, Button, Icon, Modal, Radio } from "antd";
import config from "../../../lib/config";
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 }
};

const props = {
  action: config.api + "help/file",
  listType: "picture",
  headers: { Authorization: "Bearer " + window.localStorage.getItem("token") }
};

class HelpChatCreateForm extends React.Component {
  state = { files: [] };
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={this.props.visible}
        onCancel={this.props.handleHide}
        onOk={() => {
          form.validateFields((err, values) => {
            if (err) {
              return;
            }
            const ticketData = {
              ...values,
              files: this.state.files,
              answers: [],
              ldapAlias: this.props.ldapAlias
            };
            this.props.createTicket(ticketData);
          });
          this.props.handleHide();
        }}
        title="Create TOP-help ticket"
      >
        <Form layout="horizontal">
          <FormItem label="Topic" {...formItemLayout}>
            {getFieldDecorator("topic", {
              rules: [
                { required: true, message: "Please input the topic of ticket!" }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Ticket body" {...formItemLayout}>
            {getFieldDecorator("body", {
              rules: [{ required: true, message: "Please describe the issue" }]
            })(<TextArea />)}
          </FormItem>
          <FormItem label="Ticket type" {...formItemLayout}>
            {getFieldDecorator("type", { initialValue: "issue" })(
              <RadioGroup>
                <Radio value={1} checked>
                  Issue
                </Radio>
                <Radio value={0}>Suggestion</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem label="Priority" {...formItemLayout}>
            {getFieldDecorator("priority", { initialValue: 0 })(
              <RadioGroup>
                <Radio value={0}>Medium</Radio>
                <Radio value={1}>High</Radio>
                <Radio value={2}>Extreme</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem label="Screenshots" {...formItemLayout}>
            <Upload
              {...props}
              onChange={e => {
                const { fileList } = e;
                const files = fileList.map((el, ind) => ({
                  url: el.response,
                  image: el.type.indexOf("image") !== -1 ? true : false
                }));
                this.setState({ files });
              }}
            >
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const HelpChatCreateFormDecorated = Form.create()(HelpChatCreateForm);

export default HelpChatCreateFormDecorated;
