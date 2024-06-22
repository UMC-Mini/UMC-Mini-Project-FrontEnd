import React, { useEffect } from "react";
import * as S from "./PostComent.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function PostComent(props) {
  // coment = 댓글, reply = 대댓글
  const { comentId, content, author, secret, createdAt, reply } = props;
  // const dispatch = useDispatch();
  // const comentWritingInfo = useSelector(
  //   (state) => state.post.ComentWritingInfo
  // );

  // 댓글 쓰기 함수

  const createdTime = new Date(createdAt);

  return (
    <S.Container reply={reply}>
      <S.HeaderBox>
        <S.HeaderBoxLeft>
          {reply && <S.ReplyIcon>ㄴ</S.ReplyIcon>}
          <div>{author.nickname}</div>/
        </S.HeaderBoxLeft>
        <div>수정 삭제</div>
      </S.HeaderBox>
      <S.ContentBox>{content}</S.ContentBox>
      <S.FooterBox>
        <S.FooterBoxLeft reply={reply}>댓글 쓰기</S.FooterBoxLeft>
        <S.FooterBoxRight>{`작성 날짜:${
          createdTime.getFullYear().toString() +
          "-" +
          (createdTime.getMonth() + 1).toString() +
          "-" +
          createdTime.getDate().toString()
        }`}</S.FooterBoxRight>
      </S.FooterBox>
    </S.Container>
  );
}

export default PostComent;
