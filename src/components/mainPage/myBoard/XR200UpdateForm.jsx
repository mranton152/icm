import React from "react";
import { Modal, Form, Upload, Icon, message } from "antd";
import config from "../../../lib/config";
const Dragger = Upload.Dragger;

class XR200UpdateForm extends React.Component {
  render() {
    const uploadProps = {
      name: "file",
      multiple: false,
      headers: {
        Authorization: localStorage.getItem("token")
      },
      action: config.api + "trigger/fixedAssets",

      onChange: info => {
        const status = info.file.status;
        // if (status === "done") {
        //   message.success(`${info.file.name} file uploaded successfully.`);
        // } else if (status === "error") {
        //   message.error(`${info.file.name} file upload failed.`);
        // }
        if (status !== "uploading") {
          message.success(
            `${
              info.file.name
            } file uploaded. In 5-10 minutes programm will try to update fixed asset list data`
          );
          this.props.handleHideModal();
        }
      }
    };

    return (
      <Modal
        visible={this.props.visible}
        title="Update fixed asset list info"
        onCancel={this.props.handleHideModal}
        onOk={() => {
          this.props.handleHideModal();
        }}
      >
        <p>
          For updating Fixed asset List (xr200) information, you have to
          download Fixed Asset List Report from{" "}
          <a
            target="_blank"
            href="http://financereports.lawson.slb.com/"
            rel="noopener noreferrer"
          >
            Finance Reports System:
          </a>
        </p>
        <ol>
          <li>Go by link above</li>
          <li>Choose Report Type "Reports"</li>
          <li>In "Reports" field choose "XR200-Asset Listing"</li>
          <li>Then choose "Geo" and pick RCA</li>
          <li>
            Click "Search" (Several times) until you see XR200 link at the right
          </li>
          <li>Download and unzip file. Load this .CSV file in field below</li>
        </ol>
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Use instruction above to find file and drag it here
          </p>
        </Dragger>
      </Modal>
    );
  }
}

export default Form.create()(XR200UpdateForm);
