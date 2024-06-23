import styled from "styled-components";

// Board = Header + Content + Footer
const BoardBox = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const ArticleBox = styled.form`
//   width: 100%;
//   height: 60vh;
  
// `;

const HeaderBoxWrite = styled.input`
  width: 80%;
  height: 15%;
  border: none;
  border-bottom: 1px solid #999999;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
`;

const ContentBoxWrite = styled.textarea`
  width: 80%;
  height: 70%;
  border: 1px solid #999999;
  margin-bottom: 15px;
  padding: 10px;
`;

const HeaderBox = styled.div`
  width: 80%;
  /* height: 15%; */
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom: 1px solid #999999;
  margin-bottom: 10px;
  font-size: 24px;
  padding-bottom: 10px;
`;

const HeaderUserBox = styled.div`
  /* width: 35%; */
  height: 100%;
  /* border: none; */
  color: #999999;
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  align-items: center;
`;

const manageBox = styled.div`
  position: relative;
  top: 4vh;
  left: 34vw;
  button {
    color: #999999;
    border: none;
    text-decoration: underline;
    background-color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContentBox = styled.div`
  width: 80%;
  height: 70%;
  border: 1px solid #999999;
  margin-bottom: 15px;
  padding: 10px;
`;

export {
  BoardBox,
  // ArticleBox,
  HeaderBoxWrite,
  ContentBoxWrite,
  HeaderBox,
  HeaderUserBox,
  manageBox,
  ContentBox,
};
