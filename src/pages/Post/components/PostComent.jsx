import React from "react";
import * as S from "./PostComent.style";

function PostComent(props) {
  const { isReply } = props;
  return (
    <S.Container isReply={isReply}>
      <S.HeaderBox>게시판 관리자</S.HeaderBox>
      <S.ContentBox>댓글 내용 표시되는 부분입니다</S.ContentBox>
      <S.FooterBox>
        <S.FooterBoxLeft>댓글 쓰기</S.FooterBoxLeft>
        <S.FooterBoxRight>작성 날짜 : 2024-05-26</S.FooterBoxRight>
      </S.FooterBox>
    </S.Container>
  );
}

export default PostComent;
