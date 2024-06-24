import React, { useEffect } from "react";
import * as S from "./ArticleContainer.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPassword,
  // setPosts,
  // setCurrentPage,
  setCurrentPost,
  setPostWritingInfo,
  setPwModalOpen,
} from "../../../redux/postSlice";

function ArticleContainer(props) {
  const { isWriting } = props;
  const { postID } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.post.currentPost);
  const currentPostWriteTime = new Date(currentPost.createdAt);
  const currentPassword = useSelector((state) => state.post.currentPassword);
  const postWritingInfo = useSelector((state) => state.post.postWritingInfo);
  const pwModalOpen = useSelector((state) => state.post.pwModalOpen);

  // 훅을 쓸 수 없어서 따로 만듦
  const getPostContent = async (postID, password) => {
    try {
      const { data, isLoading } = await defaultInstance.post("/posts/get", {
        postId: postID,
        password: password ? password : null,
      });
      console.log(data, isLoading);
      // dispatch(setCurrentPost(data.result));
    } catch (error) {
      console.log(error);
      if (currentPost.secret) {
        dispatch(setPwModalOpen(true));
        dispatch(setCurrentPassword(null));
      }
      return;
    }

    if (pwModalOpen) {
      confirm("비밀번호를 다시 입력하세요");
    }
  };

  useEffect(() => {
    if (!isWriting) {
      getPostContent(postID, currentPassword);
    }
  }, [, dispatch]);

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

  // 게시글 삭제
  const deletePostClickHandler = async (e) => {
    e.stopPropagation();
    if (confirm("삭제하시겠습니까?") == true) {
      try {
        const { data } = await defaultInstance.delete(`/posts/${postID}`);
        alert("포스트 삭제 성공! 게시판 페이지로 이동합니다");
      } catch (error) {
        alert("댓글이 있는 포스트는 삭제할 수 없습니다.");
        navigate("/board");
      }
    } else {
      alert("포스트 삭제를 취소합니다");
    }
  };

  // 게시글 수정
  const updatePostClickHandler = async (e) => {
    e.stopPropagation();
    const patchPostTitle = prompt("수정할 제목을 입력하세요");
    const patchPostContent = prompt("수정할 본문 내용을 입력하세요");

    const requestData = {
      title: patchPostTitle,
      content: patchPostContent,
      secret: currentPost.secret,
    };
    await defaultInstance.patch("/posts/" + postID, requestData);
    alert("포스트 수정 성공! ");
    dispatch(
      setCurrentPost({
        ...currentPost,
        title: patchPostTitle,
        content: patchPostContent,
      })
    );
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
            <S.HeaderUserBox>{`작성자:${
              currentPost.author?.nickname
            } 작성날짜:${
              currentPostWriteTime.getFullYear().toString() +
              "-" +
              (currentPostWriteTime.getMonth() + 1).toString() +
              "-" +
              currentPostWriteTime.getDate().toString()
            } 조회수:${currentPost.views}`}</S.HeaderUserBox>
          </S.HeaderBox>
          <S.manageBox>
            <button onClick={(e) => updatePostClickHandler(e)}>수정</button>
            <button onClick={(e) => deletePostClickHandler(e)}>삭제</button>
          </S.manageBox>
          <S.ContentBox>{currentPost.content}</S.ContentBox>
        </>
      )}
    </S.BoardBox>
  );
}

export default ArticleContainer;
