import styled from "styled-components";
import { IoPersonCircleSharp } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cde7ff;
`;

const leftBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const leftBoxLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-top: -10px;
  margin-right: 8px;
`;

const leftBoxText = styled.div`
  width: 45%;
  height: 22px;
`;

const rightBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rightBoxText = styled.p`
  font-size: 18px;
  font-weight: 550;
  margin-right: 10px;
`;

const rightBoxPerson = styled(IoPersonCircleSharp)`
  width: 60px;
  height: 60px;
`;

export {
  Container,
  leftBox,
  leftBoxLogo,
  leftBoxText,
  rightBox,
  rightBoxPerson,
  rightBoxText,
};
