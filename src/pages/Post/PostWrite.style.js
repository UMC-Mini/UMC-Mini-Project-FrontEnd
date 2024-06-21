import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Board = Header + Content + Footer
const BoardBox = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderBox = styled.input`
  width: 80%;
  height: 10%;
  border: none;
  border-bottom: 1px solid #999999;
  margin-bottom: 10px;
  font-size: 24px;
`;

const ContentBox = styled.textarea`
  width: 80%;
  height: 40%;
  border: 1px solid #999999;
  margin-bottom: 15px;
  padding: 10px;
`;

// Footer = Attatchment + Submit
const FooterBox = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AttachmentBox = styled.div`
  width: 40%;
  height: 80%;
`;
const AttachmentBoxInput = styled.input`
  display: none;
`;

const AttachmentBoxButton = styled.button`
  background-color: #2d415f;
  color: white;
  width: 40%;
  height: 15%;
  border-radius: 5px;
`;

const AttachmentBoxText = styled.label`
  width: 40%;
  height: 15%;
  font-size: 12px;
`;

// Submit = Secret + submit
const SubmitBox = styled.form`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SecretBox = styled.div`
  width: 90%;
  height: 40%;
`;
// const SecretBoxTextContainer = styled.div`
//   display: flex;
//   gap: 5px;
// `;
// const SecretBoxIcon = styled(MdLockOutline)``;
// const SecretBoxText = styled.div``;
// const SecretBoxRadio = styled.input``;

const SecretBoxPWInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  /* outline: none; */
`;

const SubmitBoxButton = styled.button`
  background-color: #2d415f;
  color: white;
  width: 50%;
  height: 20%;
  border-radius: 5px;
  margin-top: 50px;
  position: relative;
  left: 140px;
  background-color: #186dec;
  border: none;

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;

export {
  Container,
  BoardBox,
  HeaderBox,
  ContentBox,
  FooterBox,
  AttachmentBox,
  AttachmentBoxInput,
  AttachmentBoxButton,
  AttachmentBoxText,
  SubmitBox,
  SecretBox,
  // SecretBoxTextContainer,
  // SecretBoxIcon,
  // SecretBoxText,
  // SecretBoxRadio,
  SecretBoxPWInput,
  SubmitBoxButton,
};
