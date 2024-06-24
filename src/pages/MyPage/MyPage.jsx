import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import {
  FooterContainer,
  FooterLinks,
  SaveButton,
  Button,
  Info,
  Infochange,
  Input,
  Mypagecontainer,
  ProfileImage,
  Shell3,
  Shell4,
  Shell5,
  FooterWrapper,
  Mes,
  Shell6
} from "./MyPage.style";
import { FaCircleUser } from "react-icons/fa6";
import { deleteAction, logoutAction, modifyAction } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function MyPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const userNickname = localStorage.getItem("userNickname");
  const token = localStorage.getItem("accessToken");
  
  //body에 입력되는 state
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");

  //버튼 활성화 위한 state
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [btn, setBtn] = useState(false);

  //warn 메시지를 위한 state
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  //닉네임 유효성 검사
  const checkNickname = (value) => {
    const regExp = /^[a-zA-Z가-힣0-9]*$/;
    setNickname(value);

    if (value.trim() === "") {
      setNicknameMessage("");
      setNicknameCheck(false);
    } else if (!regExp.test(value)) {
      setNicknameMessage("문자로 입력해주세요!");
      setNicknameCheck(false);
    } else if (userNickname === value) {
      setNicknameMessage("닉네임이 기존과 같습니다!");
      setNicknameCheck(false);
    } else {
      setNicknameMessage("");
      setNicknameCheck(true);
    }
  };

  //비밀번호 유효성 검사
  const checkPw = (value) => {
    //최소 하나의 소문자, 숫자, 특수문자를 포함하고 길이가 4~12자
    const regExp = /^(?=.*[a-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    setPw(value);

    if (value.trim() === "") {
      setPwMessage("");
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
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    if ( (nicknameCheck || pwCheck) && (pwMessage.trim() === "") && (nicknameMessage.trim() === "")) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  }, [nicknameCheck, pwCheck, nicknameMessage, pwMessage]);

  // 로그아웃
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  // 회원탈퇴
  const handleDelete = async () => {
    try {
      const result = await axios.delete(`http://43.202.8.75:8080/api/v1/users/${userId}`);
      dispatch(deleteAction());
      alert("탈퇴 되셨습니다.");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("탈퇴에 실패하였습니다.");
      } else {
        alert("탈퇴에 실패하였습니다.");
      }
    }
  };

  // 정보변경
  const handleModify = async (e) => {
    e.preventDefault();

    try {
      const body = {
        password: pw,
        nickname: nickname
      };

      await axios.patch(`http://43.202.8.75:8080/api/v1/users/${userId}`, body, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("저장 완료!");
      if (nicknameCheck && nickname.trim() !== "") {
        dispatch(modifyAction({ userNickname: nickname }));
      }
      if (pwCheck && pw.trim() !== "") {
        dispatch(logoutAction());
      }
      setNickname("");
      setPw("");
      navigate("/mypage");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("저장되지 않았습니다.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <Shell3>
        <Mypagecontainer>
          <Shell6>
            <FaCircleUser size={100} />
            <br></br>
            <Shell4>
              <Info>
                <h1>내 정보</h1>
                <br />
                <h2>{userNickname} {userName}님</h2>
                <h2>상명대학교 재학</h2>
                <br />
              </Info>
              <Infochange>
                비밀번호 변경
                <Input
                  type="password"
                  value={pw}
                  onChange={(e) => checkPw(e.target.value.trim())}
                />
                <Mes>{pwMessage}</Mes>
                채팅 닉네임 변경
                <Input
                  type="text"
                  value={nickname}
                  onChange={(e) => checkNickname(e.target.value.trim())}
                />
                <Mes>{nicknameMessage}</Mes>
              </Infochange>
            </Shell4>
          </Shell6>
          <Shell5>
            <Button onClick={handleLogout}>로그아웃</Button>
            <Button onClick={handleDelete}>회원탈퇴</Button>
          </Shell5>
        </Mypagecontainer>
        <FooterWrapper>
          <FooterContainer>
            <FooterLinks>
              <span>이용 약관</span>
              <span>개인정보처리방침</span>
            </FooterLinks>
            <SaveButton disabled={!btn} onClick={handleModify}>저장</SaveButton>
          </FooterContainer>
        </FooterWrapper>
      </Shell3>
    </>
  );
}
