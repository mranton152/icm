import React from "react";
import { Modal, Spin, Upload } from "antd";
import config from "../../../lib/config";
import dayjs from "dayjs";
import HelpChatDialogAnswers from "./HelpChatDialogAnswers";
import HelpChatForm from "./HelpChatForm";
dayjs.locale("en");

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

class HelpChatDialogModal extends React.Component {
  state = { previewVisible: false };

  handleCancel = () => {
    this.setState({ previewVisible: false, previewImage: "" });
  };

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  // /*
  // перезагружает список тикетов, так как при открытии ЕСЛИ СТАТУС У ТИКЕТА БЫЛ 1 (New MESSAGE)
  // */

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps, this.props);
  //   if (
  //     !prevProps.ticket.solved &&
  //     this.props.ticket.solved &&
  //     this.props.updateOnReload
  //   ) {
  //     this.props.reloadList();
  //   }
  // }

  render() {
    const { ticket, account } = this.props;
    const files = makeFileList(ticket.data.files);
    return (
      <Modal
        visible={this.props.visible}
        onCancel={this.props.handleHide}
        footer={null}
        title={
          ticket.loading
            ? "Loading..."
            : "Tiket to TOP help: " +
              dayjs(ticket.data.CreatedAt).format("DD/MM/YYYY HH:mm")
        }
        width={800}
      >
        {ticket.loading || !ticket.solved ? (
          <Spin />
        ) : (
          <span>
            <h3>{ticket.data.topic}</h3>
            <p>{ticket.data.body}</p>
            <Upload
              className="upload-list-inline"
              listType="picture"
              fileList={files}
            />
            <HelpChatDialogAnswers
              ldapAlias={this.props.ldapAlias}
              answers={ticket.data.answers}
              account={account}
              ticketId={ticket.data.ticketId}
            />
            <HelpChatForm
              ticketId={ticket.data.ticketId}
              ldapAlias={this.props.ldapAlias}
              handleHide={this.props.handleHide}
              createAnswer={this.props.createAnswer}
              closeTicket={this.props.closeTicket}
              hideTicket={this.props.handleHide}
            />
          </span>
        )}

        <Modal
          visible={this.state.previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img
            alt="example"
            style={{ width: "100%" }}
            src={this.state.previewImage}
          />
        </Modal>
      </Modal>
    );
  }
}

export default HelpChatDialogModal;
