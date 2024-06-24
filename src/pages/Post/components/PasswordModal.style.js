import styled from "styled-components";

const Container = styled.form`
  width: 50vw;
  height: 30vh;
  position: absolute;
  top: 40%;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cde7ff;
  border-radius: 10px;
  background-color: #cde7ff;
  z-index: 10;
  gap: 10px;
`;

const InputBox = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
`;

const InputButton = styled.button`
  width: 20%;
  height: 20px;
  border-radius: 10px;
  background-color: #d9d9d9;

  &:hover {
    cursor: pointer;
    background-color: #c9c9c9;
  }
`;

export { Container, InputBox, InputButton };
