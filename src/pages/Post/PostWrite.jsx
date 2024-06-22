import React from "react";
import * as S from "./PostWrite.style";
import Navbar from "../Board/components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SecretBoxTextContainer from "./components/SecretBoxTextContainer";
import ArticleContainer from "./components/ArticleContainer";

function PostWrite() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Navbar></Navbar>
      <S.BoardBox>
        {/* <S.HeaderBox placeholder="제목 입력"></S.HeaderBox>
        <S.ContentBox placeholder="본문 내용을 입력해주세요"></S.ContentBox> */}
        <ArticleContainer isWriting={true}></ArticleContainer>
        <S.FooterBox>
          {/* 파일 첨부 작동 안함 */}
          <S.AttachmentBox>
            {/* <label>
              <S.AttachmentBoxButton>파일 선택</S.AttachmentBoxButton>
            </label> */}
            <S.AttachmentBoxInput
              type="file"
              multiple
              accept="image/*"
            ></S.AttachmentBoxInput>
            {/* <S.AttachmentBoxText>파일 미첨부</S.AttachmentBoxText> */}
          </S.AttachmentBox>
          <S.SubmitBox
            onSubmit={() => {
              navigate("/board");
            }}
          >
            {/* <S.SecretBoxTextContainer>
              <S.SecretBoxIcon></S.SecretBoxIcon>
              <S.SecretBoxText>비밀글</S.SecretBoxText>
              <S.SecretBoxRadio type="checkbox"></S.SecretBoxRadio>
            </S.SecretBoxTextContainer> */}
            <SecretBoxTextContainer isPost={true}></SecretBoxTextContainer>
            <S.SecretBoxPWInput placeholder="비밀번호를 입력"></S.SecretBoxPWInput>
            <S.SubmitBoxButton>작성</S.SubmitBoxButton>
          </S.SubmitBox>
        </S.FooterBox>
      </S.BoardBox>
    </S.Container>
  );
}

export default PostWrite;
