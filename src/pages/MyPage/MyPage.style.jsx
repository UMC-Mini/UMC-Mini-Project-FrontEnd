import styled from "styled-components";

export const Shell3 = styled.div`
  margin: 200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    margin: 50px;
  }
`;

export const Shell4 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Shell5 = styled.div`
  display: flex;
  padding-right: 0;
  gap: 10px;

  @media (max-width: 950px) {
    justify-content: center;
    gap: 5px;
  }
`;

export const Shell6 = styled.div`
  display: flex;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Mypagecontainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 950px) {
    width: 80px;
    height: 80px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 15px;
  }

  @media (max-width: 950px) {
    padding-left: 0;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 14px;
    }
  }
`;

export const Infochange = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom: 50px;

  h3 {
    font-size: 10px;
  }

  @media (max-width: 950px) {
    padding-left: 0;
    align-items: center;

    h3 {
      font-size: 9px;
    }
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin: 8px 0px 0px 0px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;

  @media (max-width: 950px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: 17px;
  background-color: white;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 950px) {
    width: 80px;
    height: 35px;
    font-size: 15px;
    margin: 10px 0;
  }
`;

export const SaveButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: 17px;
  background-color: #186dec;
  color: white;
  cursor: pointer;

  @media (max-width: 950px) {
    width: 80px;
    height: 35px;
    font-size: 15px;
    margin-top: 20px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    margin-top: 50px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ccc;
  padding-top: 20px;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 100px;

  @media (max-width: 950px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const Mes = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 10px;
  color: red;

  @media (max-width: 950px) {
    font-size: 9px;
  }
`;
