import { createChatBotMessage } from 'react-chatbot-kit';
import ChatbotWidget from '../ChatbotWidget';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const config = {
  botName: "UMC Bot",
  initialMessages: [createChatBotMessage(`안녕하세요! 무엇을 도와드릴까요?`)],
  customComponents: {
    botAvatar: (props) => <div {...props} />,
    userAvatar: (props) => <div {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ABD7FF',
    },
    chatButton: {
      backgroundColor: '#5852FE',
    },
  },
  widgets: [
    {
      widgetName: "ChatbotWidget",
      widgetFunc: (props) => <ChatbotWidget {...props} />,
    },
  ],
  state: {
    messages: [createChatBotMessage(`안녕하세요! 무엇을 도와드릴까요?`)],
  },
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
