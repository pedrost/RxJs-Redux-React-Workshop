import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { recieveHistory, recieveMessage } from "./../../actions/index";
import ChatComponent from "./Chat";
import ConfigureSocket from "./ConfigureSocket";

export class ManageChat extends React.Component {
  constructor(props) {
    super(props);

    const { recieveHistory, recieveMessage } = this.props;
    this.state = {
      webSocketObservable: ConfigureSocket(recieveHistory, recieveMessage)
    };
  }

  render() {
    const { messages } = this.props;
    return messages !== undefined && messages.length === 0 ? (
      <h1>Loading</h1>
    ) : (
      <ChatComponent
        messages={messages}
        observable={this.state.webSocketObservable}
      />
    );
  }
}

ManageChat.propTypes = {
  messages: PropTypes.array,
  recieveHistory: PropTypes.func,
  recieveMessage: PropTypes.func
};

const mapStateToProps = state => {
  return {
    messages: state.chatState.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recieveHistory: payload => dispatch(recieveHistory(payload)),
    recieveMessage: payload => dispatch(recieveMessage(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageChat);
