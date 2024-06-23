import styled from "styled-components";

export const Navbarcontainer = styled.div`
    display: flex;
    background-color: #CDE7FF;
    height: 100px;
    width: 100%;
    align-items: center;
    margin: 0;
    border-radius: 5px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 35px;
    color: #186DEC;
    margin-left: 40px;
    cursor: pointer;
  }

  h2 {
    font-size: 35px;
    color: gray;
    margin-left: 40px;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 35px;
    color: black;
    margin-right: 10px;
    cursor: pointer;
  }

  > svg {
    margin-right: 10px;
  }
`;
