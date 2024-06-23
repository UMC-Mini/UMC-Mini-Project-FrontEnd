import React, { useEffect } from "react";
import * as S from "./PostComent.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentComent,
  setCurrentComentId,
  setCurrentComentParentId,
  setCurrentPostComents,
  setIsReplyWriting,
  setIsSelected,
  setPwModalOpen,
} from "../../../state/post/postSlice";

function PostComent(props) {
  // coment = 댓글, reply = 대댓글
  const {
    comentId,
    content,
    author,
    secret,
    createdAt,
    reply,
    postId,
    comentParentId,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isReplyWriting = useSelector((state) => state.post.isReplyWriting);
  const currentPostComents = useSelector(
    (state) => state.post.currentPostComents
  );
  const isSelected = useSelector((state) => state.post.isSelected);

  // 댓글 수정 요청
  const updateComentSubmitHandler = async (e, content, secret) => {
    e.stopPropagation();
    const { data } = await defaultInstance.patch("/replies/" + comentId, {
      content: content,
      secret: secret,
    });
    dispatch(
      setCurrentPostComents(
        currentPostComents.map((coment) =>
          coment.id == comentId ? data.result : coment
        )
      )
    );
  };

  // 댓글 수정 버튼 click handler
  const updateComentClickHandler = (e) => {
    e.stopPropagation();
    const updatedComent = prompt("수정할 댓글을 입력해주세요");
    if (updatedComent) {
      updateComentSubmitHandler(e, updatedComent, secret);
    }
  };

  // 댓글 삭제
  const deleteComentClickHandler = async (e, comentID) => {
    e.stopPropagation();
    try {
      const { data } = await defaultInstance.delete("/replies/" + comentID);
      dispatch(
        setCurrentPostComents(
          currentPostComents.filter((coment) => coment.id !== comentID)
        )
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };

  // 대댓글 쓰기 버튼 click handler
  const replyComentClickHandler = async (e) => {
    e.stopPropagation();
    dispatch(setIsReplyWriting(!isReplyWriting));
    dispatch(setCurrentComentId(comentId));
    dispatch(setIsSelected({ selected: comentId }));
    navigate("/board/post/" + postId);
  };

  const createdTime = new Date(createdAt);

  return (
    <S.Container reply={reply}>
      <S.HeaderBox>
        <S.HeaderBoxLeft>
          {reply && <S.ReplyIcon>ㄴ</S.ReplyIcon>}
          <div>{author.nickname}</div>
        </S.HeaderBoxLeft>
        <S.HeaderBoxRight reply={reply}>
          <button onClick={(e) => updateComentClickHandler(e)}>수정</button>
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
