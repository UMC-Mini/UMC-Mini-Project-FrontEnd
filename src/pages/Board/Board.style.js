import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;
const BoardBox = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const SearchBox = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  flex-direction: row;
  /* justify-content: ; */
  align-items: center;
`;
const SearchBoxForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const BoardBoxHeader = styled.h1``;
const BoardBoxPostContainer = styled.ul`
  width: 100%;
  height: 80%;
  list-style: none;
  /* border-top: 3px solid black; */
  /* border-bottom: 1.5px solid black; */
`;

const BoardBoxPageButtonContainer = styled.div`
  display: flex;
`;
const BoardBoxPageBackButton = styled(IoIosArrowBack)`
  width: 30px;
  height: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  color: ${(props) => (props.currentPage == 1 ? "#999999" : "")};
  margin-right: 10px;
`;
const BoardBoxPageForwardButton = styled(IoIosArrowForward)`
  width: 30px;
  height: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  margin-left: 10px;
`;

const SearchBoxInput = styled.input`
  width: 35%;
  height: 50%;
  border-radius: 10px;
  position: relative;
  left: 2vw;
  top: 1.5px;
`;
const SearchBoxButton = styled(CiSearch)`
  margin-right: 60%;
  position: relative;
  left: -20px;
  /* margin-left: 70%; */
  &:hover {
    cursor: pointer;
  }
`;
const SearchBoxWritingButton = styled.button`
  width: 10%;
  height: 50%;
  color: white;
  background-color: #186dec;
  border: 1px solid skyblue;
  border-radius: 10px;

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;

export {
  Container,
  BoardBox,
  SearchBox,
  BoardBoxHeader,
  BoardBoxPostContainer,
  BoardBoxPageButtonContainer,
  BoardBoxPageForwardButton,
  BoardBoxPageBackButton,
  SearchBoxForm,
  SearchBoxInput,
  SearchBoxButton,
  SearchBoxWritingButton,
};
