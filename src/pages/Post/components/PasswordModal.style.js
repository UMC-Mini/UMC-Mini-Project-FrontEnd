import styled from "styled-components";

const Container = styled.form`
  width: 50vw;
  height: 30vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 10px;
  background-color: #999999;
  z-index: 10;
`;

const InputBox = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 10px;
`;

const InputButton = styled.button`
  width: 20%;
  height: 20px;
  border-radius: 10px;
  background-color: #2d415f;
`;

export { Container, InputBox, InputButton };
