import React, { useEffect } from "react";
import * as S from "./PostComent.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentComentId,
  setIsReplyWriting,
} from "../../../state/post/postSlice";

function PostComent(props) {
  // coment = 댓글, reply = 대댓글
  const { comentId, content, author, secret, createdAt, reply, postId } = props;
  const dispatch = useDispatch();
  const isReplyWriting = useSelector((state) => state.post.isReplyWriting);
  // const dispatch = useDispatch();
  // const comentWritingInfo = useSelector(
  //   (state) => state.post.ComentWritingInfo
  // );

  // 댓글 수정
  // const updateComentClickHandler = async (e, comentID) => {
  //   e.stopPropagation();
  //   const { data } = await defaultInstance.put(
  //     "/replies/" + comentID,
  //     {}
  //   );
  //   console.log(data);
  // };

  // 댓글 삭제
  const deleteComentClickHandler = async (e, comentID) => {
    e.stopPropagation();
    const { data } = await defaultInstance.delete("/replies/" + comentID);
    console.log(data);
  };

  // 대댓글 쓰기 버튼 click handler
  const replyComentClickHandler = async (e) => {
    e.stopPropagation();
    dispatch(setIsReplyWriting(!isReplyWriting));
    dispatch(setCurrentComentId(comentId));
  };

  const createdTime = new Date(createdAt);

  return (
    <S.Container reply={reply}>
      <S.HeaderBox>
        <S.HeaderBoxLeft>
          {reply && <S.ReplyIcon>ㄴ</S.ReplyIcon>}
          <div>{author.nickname}</div>/
        </S.HeaderBoxLeft>
        <S.HeaderBoxRight>
          <button>수정</button>
          <button onClick={(e) => deleteComentClickHandler(e, comentId)}>
            삭제
          </button>
        </S.HeaderBoxRight>
      </S.HeaderBox>
      <S.ContentBox>{content}</S.ContentBox>
      <S.FooterBox>
        <S.FooterBoxLeft
          reply={reply}
          onClick={(e) => replyComentClickHandler(e)}
        >
          댓글 쓰기
        </S.FooterBoxLeft>
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
