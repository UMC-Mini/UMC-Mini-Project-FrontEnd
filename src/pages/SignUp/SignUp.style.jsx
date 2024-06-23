import styled from "styled-components";

export const Shell2 = styled.div`
    margin: 50px;
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

export const LoginContainer = styled.form`
  display: flex;
  background-color: #EAE8EC;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  margin: 0;
  color: rgb(255, 255, 255);
  box-shadow: 1px 1px 1px gray;
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

  h2 {
    text-align: center;
    font-size: 25px;
    color: black;

    @media (max-width: 768px) {
      font-size: 35px;
    }

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }

  h3 {
    background-color: #ccc;
    padding: 10px;
    border-radius: 0;
    color: black; /* 글자색 설정 */
    text-align: center; /* 텍스트 가운데 정렬 */
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 8px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      padding: 6px;
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

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const SignUpButton = styled.button`
  width: 350px;
  height: 45px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  background-color: #186dec;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 35px;
    font-size: 16px;
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

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
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

export const Mes = styled.div`
  padding-top: 10px;
  font-size: 10px;
  color: red;
`;
