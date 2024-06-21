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
`;

const ComentListBox = styled.ul`
  width: 80%;
  height: 700px;
  padding-top: 10%;
  margin-top: 5%;
  border: 1px solid #999999;
`;

const ComentListItem = styled.li`
  width: 80%;
  height: 100px;
  display: flex;
`;

const ComentListItemReply = styled.li`
  width: 70%;
  height: 100px;
  display: flex;
`;

export {
  PostBox,
  MiniRightBox,
  ComentTopBox,
  ComentWriteBox,
  ComentWriteBoxInput,
  ComentWriteBoxButton,
  ComentListBox,
  ComentListItem,
};