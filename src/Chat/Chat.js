import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

import ChatWindow from "./ChatWindow/ChatWindow";

const Chat = () => {
  const [chat, setChat] = useState([]);
  const latestChat = useRef(null);

  latestChat.current = chat;

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://thedigestapp-001-site1.gtempurl.com/hubs/chat")
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then((result) => {
        console.log("Connected!");

        connection.on("ReceiveMessage", (message) => {
          const updatedChat = [...latestChat.current];
          updatedChat.push(message);

          setChat(updatedChat);
        });
      })
      .catch((e) => console.log("Connection failed: ", e));
  }, []);

  return (
    <div>
      <h4>Messages will display here</h4>
      <hr />
      <ChatWindow chat={chat} />
    </div>
  );
};

export default Chat;
