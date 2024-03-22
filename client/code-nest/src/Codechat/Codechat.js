import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./Codechat.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

// const API_KEY = "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";
// const API_KEY = "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";
const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

function Codechat() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatBot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      sentTime: new Date().toLocaleString(),
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };
  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.choices && data.choices.length > 0) {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming",
          },
        ]);
      }
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
      setIsTyping(false);
    }
  }

  return (
    <div
      className="Codechat"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <div style={{ position: "relative", height: "600px", width: "600px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              style={{ marginTop: "10px" }}
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Codechat;

// const API_KEY = "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";
