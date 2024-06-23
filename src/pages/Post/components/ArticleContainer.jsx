import React, { useEffect } from "react";
import * as S from "./ArticleContainer.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  // setPosts,
  // setCurrentPage,
  setCurrentPost,
  setPostWritingInfo,
} from "../../../state/post/postSlice";

function ArticleContainer(props) {
  const { isWriting } = props;
  const { postID } = useParams();
  // console.log(postID);

  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.post.currentPost);
  const currentPostWriteTime = new Date(currentPost.createdAt);
  const postWritingInfo = useSelector((state) => state.post.postWritingInfo);

  // 훅을 쓸 수 없어서 따로 만듦
  const getPostContent = async (postID, password) => {
    const { data } = await defaultInstance.post("/posts/get", {
      postId: postID,
      password: password ? password : null,
    });
    console.log(data);
    dispatch(setCurrentPost(data.result));
  };

  useEffect(() => {
    if (!isWriting) {
      getPostContent(postID);
    }
  }, [dispatch]);

  const headerBoxInputHandler = (e) => {
    const newElem = { ...postWritingInfo, title: e.target.value };
    dispatch(setPostWritingInfo(newElem));
    console.log(newElem);
  };

  const contentBoxInputHandler = (e) => {
    const newElem = { ...postWritingInfo, content: e.target.value };
    dispatch(setPostWritingInfo(newElem));
    console.log(newElem);
  };

  return (
    <S.BoardBox>
      {isWriting ? (
        <>
          <S.HeaderBoxWrite
            placeholder="제목 입력"
            onChange={(e) => headerBoxInputHandler(e)}
          ></S.HeaderBoxWrite>
          <S.ContentBoxWrite
            placeholder="본문 내용을 입력해주세요"
            onChange={(e) => contentBoxInputHandler(e)}
          ></S.ContentBoxWrite>
        </>
      ) : (
        <>
          <S.HeaderBox>
            <div>{currentPost.title}</div>
            <S.HeaderUserBox>{`작성자:${currentPost.author} 작성날짜:${
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
          <S.manageBox>
            <button>수정</button>
            <button>삭제</button>
          </S.manageBox>
          <S.ContentBox>{currentPost.content}</S.ContentBox>
        </>
      )}
    </S.BoardBox>
  );
}

export default ArticleContainer;
