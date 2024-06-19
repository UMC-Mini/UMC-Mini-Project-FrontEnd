import React from "react";
import * as S from "./Navbar.style";
import logo from "../../../../assets/norman/logo.png";

function Navbar() {
  return (
    <S.Container>
      <S.leftBox>
        <S.leftBoxText>SMUPOOL</S.leftBoxText>
        <S.leftBoxText>문의게시판</S.leftBoxText>
      </S.leftBox>
      <S.rightBox>
        <S.rightBoxText>마이페이지</S.rightBoxText>
        <S.rightBoxPerson />
      </S.rightBox>
    </S.Container>
  );
}

export default Navbar;
