// Socket.jsx
import React, { useState, useEffect, useRef } from "react";
import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import {
  ChatContainer,
  Message,
  InputContainer,
  Input,
  Button,
} from './Socket.style';

function Socket() {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("accessToken");
  console.log(token);

  const chatEndRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("ws://43.202.8.75:8080/chat");
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      {
        Authorization: `Bearer ${token}`,
      },
      (frame) => {
        console.log("Connected: " + frame);
        stompClient.subscribe("/topic/public", (messageOutput) => {
          console.log(messageOutput.body);
          showMessage(JSON.parse(messageOutput.body));
        });
      },
      (error) => {
        console.error("Connection error:", error);
      }
    );

    setStompClient(stompClient);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://43.202.8.75:8080/chat/history/6", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chat history:", error);
      });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const showMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    if (stompClient && message.trim() !== "") {
      const chatMessage = JSON.stringify({
        sender: 13,
        content: message,
        chatroom: 6,
      });
      stompClient.send(
        "/app/chat.message",
        {
          Authorization: `Bearer ${token}`,
        },
        chatMessage
      );
      setMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div className="container">
      <ChatContainer id="chat" className="mt-4">
        {messages.map((msg, index) => (
          <Message key={index}>
            <strong>{msg.name}: </strong> {msg.content}
          </Message>
        ))}
        <div ref={chatEndRef}></div>
      </ChatContainer>
      <InputContainer id="inputContainer">
        <Input
          type="text"
          id="message"
          className="form-control"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </InputContainer>
    </div>
  );
}

export default Socket;
