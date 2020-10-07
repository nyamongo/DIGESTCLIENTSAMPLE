import React from "react";

const Message = (props) => (
  <div style={{ background: "#eee", borderRadius: "5px", padding: "0 10px" }}>
    <p>
      <strong>{props.user}</strong> says:
    </p>
    <p>{props.message}</p>
    <p>{props.timeStamp}</p>
    <p>Chat Id {props.chatId}</p>
    <p>Message Id {props.messageId}</p>
  </div>
);

export default Message;
