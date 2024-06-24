// Socket.style.jsx
import styled from 'styled-components';

export const ChatContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px; // 아래 고정을 위한 여백 추가
`;

export const Message = styled.div`
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 20px; // 화면 아래 고정
  left: 50%; // 중앙 정렬을 위한 위치 조정
  transform: translateX(-50%); // 중앙 정렬
  width: calc(100% - 20px); // 화면 너비에 따라 조정
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  flex: 1; // 남은 공간을 모두 차지하도록 설정
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
`;
