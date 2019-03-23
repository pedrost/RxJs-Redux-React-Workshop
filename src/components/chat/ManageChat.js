import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChatComponent from "./Chat";

export function ManageChat({ messages, loadMessages, ...props }) {
  function handleChange(event) {
    const { name, value } = event.target;
  }

  return articles.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <ChatComponent messages={messages} onChange={handleChange} />
  );
}

ManageChatComponent.propTypes = {
  messages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageChat);
