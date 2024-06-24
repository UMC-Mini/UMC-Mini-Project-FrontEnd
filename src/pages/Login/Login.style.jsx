import styled from "styled-components";

export const Shell = styled.div`
    margin: 50px;
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  cursor : pointer;
`;

export const LoginContainer = styled.form`
  display: flex;
  background-color: #E8EAEC;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  color: rgb(255, 255, 255);
  box-shadow: 1px 1px 1px gray;
  border-radius: 10px;
  padding-top: 100px;

  h1 {
    text-align: center;
    font-size: 45px;
    color: black;

    @media (max-width: 768px) {
      font-size: 35px;
    }

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

export const Mes = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin: 8px 0px 5px 0px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const LoginButton = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  color: white;
  background-color: #186dec;
  margin-bottom: 0;
  border: 1px solid #186dec;
  cursor : pointer;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const SignUpButton = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  color: #186dec;
  background-color: white;
  margin-top: 5;
  border: 1px solid #186dec;
  cursor : pointer;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-top: 20px;

  h1 {
    color: white;
    font-size: 15px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Modal = styled.div`
  background-color: #ccc;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 0;
    color: red;
    text-align: center;
    font-size: 15px;
`;