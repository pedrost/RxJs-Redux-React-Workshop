import { Observable } from "rxjs";

const ConfigureSocket = (recieveHistory, recieveMessage) => {
  let subject = Observable.webSocket("wss://stream-chat-demo.herokuapp.com");
  subject.retry().subscribe(
    msg => {
      let resData = JSON.parse(JSON.stringify(msg));
      if (resData.type === "history") {
        recieveHistory(resData.data);
      }
      if (resData.type === "message") {
        recieveMessage(resData.data);
      }
    },
    err => console.log(err)
  );
  return subject;
};

export default ConfigureSocket;
