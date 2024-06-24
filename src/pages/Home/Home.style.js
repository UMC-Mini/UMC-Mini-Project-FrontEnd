import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  overflow: hidden;
  display: flex;
  font-family: 'MyFont', sans-serif;

  background: linear-gradient(to bottom left, #186DEC, white);
  color: white;
  position: relative;
`;

const Left = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  img {
    max-width: 100%;
    height: auto;
    position: relative;
    left: -250px;
  }

  .portal {
    position: relative;
    left: 300px;
    top: -680px;
  }

  .portal2 {
    position: relative;
    left: 750px;
    top: -770px;
  }

  .star {
    position: relative;
    left: 720px;
    top: -510px;
  }

  .star2 {
    position: relative;
    left: 580px;
    top: -400px;
  }
`;

const Right = styled.div`
  
`;

const Welcome = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;

  img {
    position: absolute;
    top: 25px;
    right: 430px;

    background-color: #D9D9D9;
    width: 30px;
    padding: 5px;
    border-radius: 50%;
  }

  p {
    position: absolute;
    top: 25px;
    right: 30px;
    padding: 10px;
    background-color: #99BBEC;
    color: black;
    text-align: center;
    cursor: pointer;

    width: 370px;
    border-radius: 40px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 33%;
  right: 8%;
  font-size: 70px;
  font-weight: bold;
  text-align: right;
`;

const Button = styled.div`
  position: absolute;
  bottom: 40px;
  right: 50px;
  display: flex;
  gap: 50px;

  button {
    width: 170px;
    height: 50px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
`;

export {Container, Left, Right, Welcome, Title, Button}