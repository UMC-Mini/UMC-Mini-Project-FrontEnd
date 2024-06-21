import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: ${(props) => (props.isReply ? "93.5%" : "100%")};
  left: ${(props) => (props.isReply ? "5vw" : "0")};
  background-color: ${(props) => (props.isReply ? "#F8F8F8" : "white")};
  height: 20vh;
  display: flex;
  flex-direction: column;
  border-top: ${(props) => (props.isReply ? "" : "1px solid #999999")};
  border-bottom: 1px solid #999999;
  margin-bottom: 5px;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-weight: ${(props) => (props.isReply ? "600" : "400")}; */
`;

const ReplyIcon = styled.div`
  /* width: 100%; */
  /* height: 30%; */
  /* position: relative; */
  top: 10%;
`;

const HeaderBoxLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
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
  background-color: ${(props) => (props.isReply ? "#F8F8F8" : "white")};
  &:hover {
    cursor: pointer;
  }
`;
const FooterBoxRight = styled.div`
  width: 40%;
  height: 100%;
  color: #999999;
`;

export {
  Container,
  ReplyIcon,
  HeaderBox,
  HeaderBoxLeft,
  ContentBox,
  FooterBox,
  FooterBoxLeft,
  FooterBoxRight,
};
