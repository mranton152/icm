import React from "react";
import { Table, Upload } from "antd";
import config from "../../../lib/config";
import dayjs from "dayjs";
dayjs.locale("en");

const Column = Table.Column;
const makeFileList = files => {
  if (!files) return [];
  return files.map((el, ind) => {
    let name = el.url.split("/");
    name = name[name.length - 1];
    return {
      status: "done",
      url: config.url + el.url,
      name: name,
      thumbUrl: config.url + el.url,
      uid: ind,
      linkProps: { download: "image" }
    };
  });
};

class HelpChatDialogAnswers extends React.Component {
  state = { previewVisible: false };

  render() {
    const { answers } = this.props;
    const data = answers.map((el, ind) => ({
      user: (
        <span>
          <h4>{el.fullName}</h4>
          <p>{dayjs(el.CreatedAt).format("DD/MM/YYYY HH:mm")}</p>
        </span>
      ),
      answer: (
        <span>
          <p>{el.body}</p>
          <Upload
            className="upload-list-inline"
            listType="picture"
            fileList={makeFileList(el.files)}
          />
        </span>
      ),
      key: ind
    }));
    return (
      <Table dataSource={data} showHeader={false} pagination={false}>
        <Column dataIndex="user" key="user" title="Topic" width={300} />
        <Column dataIndex="answer" key="body" title="Created at" />
      </Table>
    );
  }
}

export default HelpChatDialogAnswers;
