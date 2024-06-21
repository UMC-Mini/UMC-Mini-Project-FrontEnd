import React from "react";
import * as S from "./PostComent.style";

function PostComent(props) {
  // coment = 댓글, reply = 대댓글
  const { isReply } = props;
  return (
    <S.Container isReply={isReply}>
      <S.HeaderBox>
        <S.HeaderBoxLeft>
          {isReply && <S.ReplyIcon>ㄴ</S.ReplyIcon>}
          <div>게시판 관리자</div>
        </S.HeaderBoxLeft>
        <div>수정 삭제</div>
      </S.HeaderBox>
      <S.ContentBox>댓글 내용 표시되는 부분입니다</S.ContentBox>
      <S.FooterBox>
        <S.FooterBoxLeft isReply={isReply}>댓글 쓰기</S.FooterBoxLeft>
        <S.FooterBoxRight>작성 날짜 : 2024-05-26</S.FooterBoxRight>
      </S.FooterBox>
    </S.Container>
  );
}

export default PostComent;
