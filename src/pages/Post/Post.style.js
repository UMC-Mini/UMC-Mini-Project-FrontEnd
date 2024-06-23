import styled from "styled-components";

const PostBox = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MiniRightBox = styled.div``;
const ComentTopBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  /* border: 1px black solid; */
  margin-bottom: 10px;
  gap: 10px;
`;
const ComentWriteBox = styled.form`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;

  border: 1px solid #999999;
`;
const ComentWriteBoxInput = styled.input`
  width: 60%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  padding-left: 15px;
`;
const ComentWriteBoxButton = styled.button`
  width: 10%;
  height: 100%;
  background-color: #2d415f;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    background-color: #186dec;
    cursor: pointer;
  }
`;

const ComentListBox = styled.ul`
  width: 80%;
  height: 700px;
  margin-top: 5%;
  -webkit-padding-start: 0px; // list 태그의 왼쪽 자동 여백 삭제용
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ReplyContainer = styled.div`
  margin-top: 5px;
  width: 70vw;
  height: 20vh;
  /* display: flex; */
  /* justify-content: flex-end; */
`;

const ReplyTopBox = styled.div`
  width: 100%;
  /* height: 5vh; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid #999999; */
  margin-bottom: 10px;
  margin-top: 10px;
  gap: 10px;
`;

const ReplyWriteBox = styled.form`
  width: 93.5%;
  height: 6.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #999999; */

  input {
    width: 90%;
    height: 100%;
    border: 1px solid #999999;
    outline: none;
    font-size: 15px;
    padding-left: 15px;
  }

  button {
    width: 10%;
    height: 100%;
    background-color: #2d415f;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    font-weight: 600;

    &:hover {
      background-color: #186dec;
      cursor: pointer;
    }
  }
`;

export {
  PostBox,
  MiniRightBox,
  ComentTopBox,
  ComentWriteBox,
  ComentWriteBoxInput,
  ComentWriteBoxButton,
  ComentListBox,
  ReplyContainer,
  ReplyTopBox,
  ReplyWriteBox,
};