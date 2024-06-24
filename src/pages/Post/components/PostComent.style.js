import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: ${(props) => (props.reply ? "93.5%" : "100%")};
  /* left: ${(props) => (props.reply ? "5vw" : "0")}; */
  background-color: ${(props) => (props.reply ? "#F8F8F8" : "white")};
  height: 150px;
  display: flex;
  flex-direction: column;
  border-top: ${(props) => (props.reply ? "" : "1px solid #999999")};
  border-bottom: 1px solid #999999;
  margin-bottom: 5px;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-weight: ${(props) => (props.reply ? "600" : "400")}; */
`;

const ReplyIcon = styled.div`
  /* width: 100%; */
  /* height: 30%; */
  /* position: relative; */
  top: 10%;
  margin-right: 5px;
`;

const HeaderBoxLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
`;

const HeaderBoxRight = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    color: #999999;
    border: none;
    text-decoration: underline;
    background-color: ${(props) => (!props.reply ? "white" : "#f8f8f8")};
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FooterBoxLeft = styled.button`
  /* width: 20%; */
  height: 100%;
  border: none;
  text-decoration: underline;
  background-color: ${(props) => (props.reply ? "#F8F8F8" : "white")};
  &:hover {
    cursor: pointer;
  }
`;
const FooterBoxRight = styled.div`
  width: 30%;
  height: 100%;
  color: #999999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export {
  Container,
  ReplyIcon,
  HeaderBox,
  HeaderBoxLeft,
  HeaderBoxRight,
  ContentBox,
  FooterBox,
  FooterBoxLeft,
  FooterBoxRight,
};
