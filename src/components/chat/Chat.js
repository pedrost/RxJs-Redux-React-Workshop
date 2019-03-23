import React from "react";
import "./../../assets/components/chat.scss";

export class Chat extends React.Component {
  componentDidMount() {
    var connection = new WebSocket("wss://stream-chat-demo.herokuapp.com");

    const input = document.querySelector("#input");
    const messages = document.querySelector("#messages");
    const overflow = document.querySelector(".overflow");
    const nameInput = document.querySelector("#name-input");
    const sendButton = document.querySelector("#send");

    let userName, userColor;
    let oddMessage = true;
    let autoScroll = true;

    // Respond to new connection
    connection.addEventListener("open", e => {});

    // Respond to WebSocket messages
    connection.addEventListener("message", message => {
      let resData;

      try {
        resData = JSON.parse(message.data);
      } catch (error) {
        console.warn(error);
        console.warn("The message does not seem to be valid JSON.");
      }

      // Once message is received allow user to send another message
      input.removeAttribute("disabled");
      input.focus();

      if (resData.type === "history") {
        resData.data.forEach(message => addMessage(message));
      } else if (resData.type === "color") {
        userColor = resData.data;
      } else if (resData.type === "message") {
        addMessage(resData.data);
      }

      if (autoScroll) {
        overflow.scrollTop = overflow.scrollHeight - overflow.clientHeight;
      }
    });

    // Respond to user input
    function sendMessage(message) {
      if (!message) return;

      input.setAttribute("disabled", true);
      input.value = "";
      connection.send(message);

      // The first message will be the user's name
      if (!userName) {
        userName = message;
        sendButton.innerHTML = "Chat";
      }
    }

    input.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        sendMessage(e.target.value);
      }
    });

    sendButton.addEventListener("click", e => {
      sendMessage(input.value);
    });

    // Add a message to message to DOM
    function addMessage(data) {
      const newMsg = document.createElement("div");

      const time = timeString(data.timestamp);
      const messageParity = addMessage.odd ? "odd" : "even";
      addMessage.odd = !addMessage.odd;
      newMsg.setAttribute("class", `${messageParity} message`);

      newMsg.innerHTML = `
					<span class='timestamp'>${time}</span>
					<span class='name' style='color: ${data.color}'>${data.author}:</span>
					<span class='text'>${data.text}</span>
				`;
      //	messages.insertBefore(newMsg, messages.childNodes[0])
      messages.appendChild(newMsg);
    }

    addMessage.odd = true;

    overflow.addEventListener("scroll", e => {
      autoScroll = false;
      const overflow = e.target;
      if (
        overflow.scrollTop ===
        overflow.scrollHeight - overflow.clientHeight
      ) {
        autoScroll = true;
      }
    });

    function timeString(timestamp) {
      const date = new Date(timestamp);
      const hour = date.getHours() % 12;
      let min = date.getMinutes();
      min = min < 10 ? `0${min}` : min;

      return `${hour}:${min}`;
    }
  }

  render() {
    return (
      <div>
        <main id="stream-chat">
          <h1>Redux Chat! 🎉</h1>

          <div className="overflow">
            <div id="messages" />
          </div>

          <div id="input-area">
            <textarea id="input" type="text" disabled />
            <button id="send">Choose Name</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Chat;
