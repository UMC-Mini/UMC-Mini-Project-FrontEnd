import { useState, useEffect } from "react";
import { Input, LoginContainer, SignUpButton, Logo, Shell2, Mes} from "./SignUp.style";
import { useNavigate } from "react-router-dom";
import { loginData } from "../../redux/userSlice";
import axios from "axios";
import logo from "/logo_스뮤풀1.png";


export default function SignUp() {

  const navigate = useNavigate();

  //body에 입력되는 state
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  //버튼 활성화 위한 state
  const [nameCheck, setNameCheck] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [btn, setBtn] = useState(false);

  //warn 메시지를 위한 state
  const [nameMessage, setNameMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  //이름 유효성 검사
  const checkName = (value) => {
    const regExp = /^[a-zA-Z가-힣]*$/;
    setName(value);

    if (value.trim() === "") {
      setNameMessage("이름을 입력해주세요!");
      setNameCheck(false);
    } else if (!regExp.test(value)) {
      setNameMessage("문자로 입력해주세요!");
      setNameCheck(false);
    } else {
      setNameMessage("");
      setNameCheck(true);
    }
  };

  //닉네임 유효성 검사
  const checkNickname = (value) => {
    const regExp = /^[a-zA-Z가-힣0-9]*$/;
    setNickname(value);

    if (value.trim() === "") {
      setNicknameMessage("닉네임을 입력해주세요!");
      setNicknameCheck(false);
    } else if (!regExp.test(value)) {
      setNicknameMessage("문자로 입력해주세요!");
      setNicknameCheck(false);
    } else {
      setNicknameMessage("");
      setNicknameCheck(true);
    }
  };

  //이메일 유효성 검사
  const checkEmail = (value) => {
  //영어 소문자, 숫자, @와 .을 포함
  const regExp = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
  setEmail(value);

  if (value.trim() === "") {
    setEmailMessage("이메일을 입력해주세요!");
    setEmailCheck(false);
  } else if (!regExp.test(value)) {
    setEmailMessage("이메일 양식에 맞게 다시 입력해주세요!");
    setEmailCheck(false);
  } else {
    setEmailMessage("");
    setEmailCheck(true);
  }
};


  //비밀번호 유효성 검사
  const checkPw = (value) => {
    //최소 하나의 소문자, 숫자, 특수문자를 포함하고 길이가 4~12자
    const regExp = /^(?=.*[a-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    setPw(value);

    if (value.trim() === "") {
      setPwMessage("비밀번호를 입력해주세요!");
      setPwCheck(false);
    } else if (value.length < 4) {
      setPwMessage("최소 4자리 이상 입력해주세요.");
      setPwCheck(false);
    } else if (value.length > 12) {
      setPwMessage("최대 12자리까지 입력 가능합니다.");
      setPwCheck(false);
    } else if (!regExp.test(value)) {
      setPwMessage("비밀번호는 소문자, 숫자, 특수문자를 포함해주세요.");
      setPwCheck(false);
    } else {
      setPwMessage("");
      setPwCheck(true);
    }
  };

  useEffect(() => {
    if ( nameCheck && nicknameCheck && emailCheck && pwCheck ) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  }, [nameCheck, nicknameCheck, emailCheck, pwCheck]);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name: name,
        email: email,
        password: pw,
        nickname: nickname,
      };

      await axios.post("http://43.202.8.75:8080/api/v1/users/signup", body);
      alert("인증 완료! 가입되었습니다.");
      navigate("/Login");
      loginData(body);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("인증되지 않았습니다.\n이미 존재하는 이메일 입니다.");
      }
    }
  };

  return (
    <Shell2>
      <LoginContainer>
        <Logo src={logo} alt="Logo" onClick={()=>{navigate("/")}}/> 
        <br></br>
        <h1> 회원가입</h1>
        <br></br>
        <br></br>
        {/*<h2>상명대 학생 인증</h2>
        <br></br>
  <h3>샘물 통합 로그인과 동일합니다.</h3>*/}
        <br></br>
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => checkName(e.target.value.trim())}
        />
        <Mes>{nameMessage}</Mes>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => checkEmail(e.target.value.trim())}
        />
        <Mes>{emailMessage}</Mes>
        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => checkPw(e.target.value.trim())}
        />
        <Mes>{pwMessage}</Mes>
        <Input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => checkNickname(e.target.value.trim())}
        />
        <Mes>{nicknameMessage}</Mes>
        <br></br>
        <SignUpButton disabled={!btn} onClick={handleSignup}>
          인증
        </SignUpButton>
      </LoginContainer>
    </Shell2>
  );
}