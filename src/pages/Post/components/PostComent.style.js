import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: ${(props) => (props.isReply ? "65vw" : "70vw")};
  left: ${(props) => (props.isReply ? "5vw" : "0")};
  height: 20vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #999999;
  margin-bottom: 10px;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-weight: ${(props) => (props.isReply ? "600" : "400")}; */
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
  width: 20%;
  height: 100%;
`;
const FooterBoxRight = styled.div`
  width: 40%;
  height: 100%;
`;

export {
  Container,
  HeaderBox,
  ContentBox,
  FooterBox,
  FooterBoxLeft,
  FooterBoxRight,
};
