import React from "react";
import PropTypes from "prop-types";
import "./../../assets/components/chat.scss";

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      inputPlaceHolder: "Type your name",
      buttonPlaceHolder: "Choose name"
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submit = this.submit.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  handleTextChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  componentDidMount() {
    this.messagedEnd.scrollTop = this.messagedEnd.scrollHeight;
  }

  submit() {
    this.messagedEnd.scrollTop = this.messagedEnd.scrollHeight;
    this.props.observable.next(this.state.inputValue);
    this.setState({
      inputValue: "",
      buttonPlaceHolder: "Send message",
      inputPlaceHolder: ""
    });
  }

  onKeyPressed(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.submit();
    }
  }

  render() {
    return (
      <main id="stream-chat">
        <h1>Redux Chat! 🎉</h1>

        <div className="overflow" ref={el => (this.messagedEnd = el)}>
          <div id="messages">
            {this.props.messages.map(message => (
              <div className="even message" key={message.timestamp}>
                <span className="timestamp">{message.timestamp}</span>
                <span className="name" style={{ color: message.color }}>
                  {message.author}
                </span>
                <span className="text">{message.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="input-area">
          <textarea
            id="input"
            value={this.state.inputValue}
            placeholder={this.state.inputPlaceHolder}
            type="text"
            onChange={this.handleTextChange}
            onKeyDown={this.onKeyPressed}
          />
          <button id="send" onClick={this.submit}>
            {this.state.buttonPlaceHolder}
          </button>
        </div>
      </main>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  observable: PropTypes.object
};

export default Chat;
