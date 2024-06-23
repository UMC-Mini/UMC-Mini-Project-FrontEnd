import { useParams } from "react-router-dom";
import Navbar from "../Board/components/Navbar/Navbar";
import ArticleContainer from "./components/ArticleContainer";
import * as S from "./Post.style";
import { useEffect } from "react";
import SecretBoxTextContainer from "./components/SecretBoxTextContainer";
import { defaultInstance } from "../../api/axiosInstance";
import PostComent from "./components/PostComent";
import usePostContent from "./../../Hooks/usePostContent";
import usePostAllComents from "./../../Hooks/usePostAllComents";
import {
  // setPosts,
  // setCurrentPage,
  setCurrentPost,
  setCurrentPostComents,
  setComentWritingInfo,
} from "../../state/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import PasswordModal from "./components/PasswordModal";

export default function Post() {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const currentPostComents = useSelector(
    (state) => state.post.currentPostComents
  );
  const currentPost = useSelector((state) => state.post.currentPost);
  const comentWritingInfo = useSelector((state) => {
    return state.post.comentWritingInfo;
  });
  const pwModalOpen = useSelector((state) => state.post.pwModalOpen);

  // 현재 포스트의 모든 댓글 불러오는 함수
  const getPostAllComents = async (postID) => {
    const { data } = await defaultInstance.get("/posts/" + postID + "/replies");
    console.log(data);
    dispatch(setCurrentPostComents(data.result));
  };

  // 댓글 작성 함수
  const postComentSubmitHandler = async (
    e,
    content,
    secret,
    postID,
    parentComentID
  ) => {
    e.preventDefault();
    // 댓글
    const requestDataComent = {
      content: content,
      secret: secret,
      postId: postID,
    };

    // 대댓글
    const requestDataReply = {
      content: content,
      secret: secret,
      postId: postID,
      parentId: parentComentID,
    };

    const { data } = await defaultInstance.post(
      "/replies",
      parentComentID ? requestDataReply : requestDataComent
    );
    console.log(data);
  };

  useEffect(() => {
    getPostAllComents(postID);
    // usePostContent(postID);
  }, [dispatch]);

  return (
    <>
      {pwModalOpen && <PasswordModal></PasswordModal>}
      {!pwModalOpen && (
        <>
          <Navbar></Navbar>
          <S.PostBox>
            {/* navbar 10% */}
            {/* article container 60% -> 50%로 props 전달하기 */}
            <ArticleContainer isWriting={false}></ArticleContainer>
            {/* comentbox 30% */}
            <S.ComentTopBox></S.ComentTopBox>
            <S.ComentTopBox>
              <div>댓글 작성</div>
              <SecretBoxTextContainer isPost={false}></SecretBoxTextContainer>
            </S.ComentTopBox>
            <S.ComentWriteBox
              onSubmit={(e) =>
                postComentSubmitHandler(
                  e,
                  e.target[0].value,
                  comentWritingInfo.secret,
                  postID
                )
              }
            >
              <S.ComentWriteBoxInput
                type="text"
                placeholder="댓글을 입력하세요"
              />
              <S.ComentWriteBoxButton>등록</S.ComentWriteBoxButton>
            </S.ComentWriteBox>
            <S.ComentListBox>
              {/* {console.log(currentPostComents[2])} */}
              {currentPostComents &&
                currentPostComents.map((item) => {
                  return (
                    <PostComent
                      key={item.id}
                      author={item.author}
                      createdAt={item.createdAt}
                      content={item.content}
                      comentId={item.id}
                      reply={item.reply}
                      secret={item.secret}
                    ></PostComent>
                  );
                })}
              {/* <PostComent reply={false}></PostComent>
          <PostComent reply={true}></PostComent>
          <PostComent reply={true}></PostComent> */}
              {/* 마지막에 댓글 추가 요소 만들기 포스트 코멘트 props 조정해서  */}
            </S.ComentListBox>
          </S.PostBox>
        </>
      )}
    </>
  );
}
