import React from "react";
import { Card, Row, Col, Badge, Button } from "antd";
import { connect } from "react-redux";
import LoadingCogs from "../../atoms/LoadingCogs";
import HelpChatCreateModal from "./HelpChatCreateModal";
import HelpChatDialogModal from "./HelpChatDialogModal";
import constants from "../../../store/actionTypes";
import HelpChatList from "./HelpChatList";

const { HELP } = constants;

class HelpChatContainer extends React.Component {
  state = { createVisible: false, dialogVisible: false };

  componentDidUpdate() {
    const { ticketList } = this.props;
    if (ticketList.solved && !ticketList.loading) {
      this.props.getListOfTickets(this.props.account.meData.username);
    }
  }

  handleShowTicketBody = id => {
    this.setState({ dialogVisible: true, ticketId: id });
    this.props.getTicketById(id);
  };

  render() {
    const { account, ticketList } = this.props;
    const { meData } = account;
    if (!meData) return <LoadingCogs />;

    return (
      <span>
        <Card
          title={
            <Row className={`card-header-wrapper`} type="flex" align="middle">
              <Col span={18}>Support and suggestions</Col>
              <Col span={6} className="align-right">
                {ticketList.solved && (
                  <Badge
                    count={ticketList.data.reduce(
                      (prev, cur) => (cur.status === 1 ? prev + 1 : prev),
                      0
                    )}
                  />
                )}
              </Col>
            </Row>
          }
        >
          <HelpChatList
            data={ticketList.data}
            loading={ticketList.loading}
            handleShowTicketBody={this.handleShowTicketBody}
          />
          <br />
          <Button
            onClick={() => {
              this.setState({ createVisible: true });
            }}
          >
            Create ticket
          </Button>
          <HelpChatCreateModal
            visible={this.state.createVisible}
            handleHide={() => {
              this.setState({ createVisible: false });
            }}
            createTicket={this.props.createTicket}
            ldapAlias={this.props.account.meData.username}
          />
        </Card>
        <HelpChatDialogModal
          visible={this.state.dialogVisible}
          ticketId={this.state.ticketId}
          ticket={this.props.ticket}
          handleHide={() => {
            this.setState({ dialogVisible: false });
          }}
          ldapAlias={this.props.account.meData.username}
          createAnswer={this.props.createAnswer}
        />
      </span>
    );
  }
}
const mapStateToProps = state => ({
  account: state.account,
  ticketList: state.help.list || {},
  ticket: state.help.ticket || {}
});

const mapDispatchToProps = dispatch => ({
  getListOfTickets: ldapAlias =>
    dispatch({ type: HELP.LIST.REQUEST, payload: { ldapAlias } }),
  createTicket: data =>
    dispatch({ type: HELP.POST.REQUEST, payload: { data } }),
  getTicketById: id => dispatch({ type: HELP.GET.REQUEST, payload: { id } }),
  createAnswer: (data, ticketId) =>
    dispatch({ type: HELP.PUT.REQUEST, payload: { data, ticketId } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpChatContainer);
