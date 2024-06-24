import {styled, keyframes} from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 75px;
  left: 95px;
  width: 900px;
  height: 800px;
  background-color: white;
  color: black;
  border-radius: 10px;
  z-index: 1000;

  animation: ${({ isClosing }) => (isClosing ? fadeOutDown : fadeInUp)} 0.2s ease-out;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 60px;

  color: gray;
  font-size: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 120px;
  gap: 22px;
  
  label {
    font-size: 25px;
  }

  input {
    height: 45px;
    border-radius: 10px;
    border: 1px solid gray;
    padding: 5px 20px;
    font-size: 20px;
  }
`;


const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 0 0 0 15px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;


const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  button {
    width: 650px;
    height: 80px;

    border: none;
    border-radius: 10px;
    background-color: ${({ isActive }) => (isActive ? '#186DEC' : '#d9d9d9')};
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

export {Container, Header, Content, ErrorMessage, Button, Close}