import { IoIosArrowBack } from 'react-icons/io';
import * as C from './Chatting.style';
import { Chatbot } from 'react-chatbot-kit';

import config from './ChatbotKit/config';
import MessageParser from './ChatbotKit/MessageParser';
import ActionProvider from './ChatbotKit/ActionProvider';

const Chatting = ({ onBack }) => {
  return (
    <C.Container>
      <C.ChatHeader>
        <IoIosArrowBack size="30px" onClick={onBack} style={{ cursor: 'pointer'}} />
        <p>Chat with us</p>
      </C.ChatHeader>
      <C.ChatbotWrapper>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider} />
      </C.ChatbotWrapper>
    </C.Container>
  );
};

export default Chatting;