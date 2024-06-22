import React, { useEffect } from "react";
import * as S from "./ArticleContainer.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  // setPosts,
  // setCurrentPage,
  setCurrentPost,
} from "../../../state/post/postSlice";

function ArticleContainer(props) {
  const { isWriting } = props;
  const { postID } = useParams();
  // console.log(postID);

  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.post.currentPost);
  const currentPostWriteTime = new Date(currentPost.createdAt);

  const getPostContent = async (id) => {
    const { data } = await defaultInstance.get("/posts/" + id);
    console.log(data);
    dispatch(setCurrentPost(data.result));
  };

  useEffect(() => {
    if (!isWriting) {
      getPostContent(postID);
    }
  }, []);

  return (
    <S.BoardBox>
      {isWriting ? (
        <>
          <S.HeaderBoxWrite placeholder="제목 입력"></S.HeaderBoxWrite>
          <S.ContentBoxWrite placeholder="본문 내용을 입력해주세요"></S.ContentBoxWrite>
        </>
      ) : (
        <>
          <S.HeaderBox>
            <div>{currentPost.title}</div>
            <S.HeaderUserBox>{`작성자:${currentPost.author.nickname} 작성날짜:${
              currentPostWriteTime.getFullYear().toString() +
              "-" +
              (currentPostWriteTime.getMonth() + 1).toString() +
              "-" +
              currentPostWriteTime.getDate().toString()
              // " " +
              // currentPostWriteTime.getHours().toString() +
              // ":" +
              // currentPostWriteTime.getMinutes().toString()
            } 조회수:${currentPost.views}`}</S.HeaderUserBox>
          </S.HeaderBox>
          <S.ContentBox>{currentPost.content}</S.ContentBox>
        </>
      )}
    </S.BoardBox>
  );
}

export default ArticleContainer;
