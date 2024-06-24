import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const ChatHeader = styled.div`
  display: flex;

  font-size: 25px;
  color: gray;
  margin-bottom: 20px;
  p {
    margin-left: 10px;
  }
`;

const ChatbotWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  overflow-y: auto;
`;

export {Container, ChatHeader, ChatbotWrapper}