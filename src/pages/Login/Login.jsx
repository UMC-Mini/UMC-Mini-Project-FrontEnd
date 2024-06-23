import React, { useState } from "react";
import { LoginContainer, Input, LoginButton, SignUpButton, Logo, Modal, Shell, } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/userSlice";
import axios from "axios";
import logo from "/logo_스뮤풀1.png";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || email === "") {
      alert("이메일 혹은 비밀번호 값이 존재하지 않습니다.");
      return;
    }

    setLoading(true);

    try {
      const body = {
        email: email,
        password: pw,
      };

      const result = await axios.post("http://43.202.8.75:8080/api/v1/users/login", body);
      alert("로그인 되셨습니다.");

      dispatch(loginAction(result.data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 404) {
        alert("이메일 혹은 비밀번호가 잘못되었습니다.");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }
  };

  const handleSignUp = () => {
    navigate("/SignUp"); // 회원가입 페이지로 이동
  };

  return (
    <Shell>
    <LoginContainer>
      <Logo src={logo} alt="Logo" onClick={()=>{navigate("/")}}/> 
      <br></br>
      <h1> 로그인 </h1>
      <br></br>
      <br></br>
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <LoginButton onClick={handleLogin}>
        {loading ? "Loading..." : "로그인"}
      </LoginButton>
      <br></br>
      <SignUpButton onClick={handleSignUp}>
        회원가입
      </SignUpButton>
    </LoginContainer></Shell>
  );
}
