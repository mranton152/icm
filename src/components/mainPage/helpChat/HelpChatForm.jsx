import React from "react";
import { Form, Input, Upload, Button, Icon, Divider } from "antd";
import config from "../../../lib/config";
const FormItem = Form.Item;
const TextArea = Input.TextArea;

const props = {
  action: config.api + "help/file",
  listType: "picture",
  headers: {
    Authorization: "Bearer " + window.localStorage.getItem("token")
  }
};

class HelpChatForm extends React.Component {
  state = { files: [] };
  render() {
    const { form, ticketId } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <FormItem label="Message">
          {getFieldDecorator("body", {
            rules: [{ required: true, message: "Your message" }]
          })(<TextArea />)}
        </FormItem>
        <FormItem label="Add files">
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
            </Button>{" "}
          </Upload>
          <Button
            type="primary"
            onClick={() => {
              form.validateFields((err, values) => {
                if (err) {
                  return;
                }
                const answer = {
                  ...values,
                  files: this.state.files,
                  ldapAlias: this.props.ldapAlias
                };
                this.props.createAnswer(answer, ticketId);
              });
            }}
          >
            Submit message
          </Button>
          <Divider type="vertical" />
          <Button
            type="danger"
            onClick={() => {
              this.props.closeTicket(ticketId);
              this.props.hideTicket();
            }}
          >
            Close ticket
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(HelpChatForm);
