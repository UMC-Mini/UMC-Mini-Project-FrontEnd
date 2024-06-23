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
  setIsReplyWriting,
  setPwModalOpen,
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
  const isReplyWriting = useSelector((state) => state.post.isReplyWriting);
  const currentComentId = useSelector((state) => state.post.currentComentId);
  const currentComentParentId = useSelector(
    (state) => state.post.currentComentParentId
  );
  const isSelected = useSelector((state) => state.post.isSelected);

  // 현재 포스트의 모든 댓글 불러오는 함수
  const getPostAllComents = async (postID) => {
    const { data } = await defaultInstance.get("/posts/" + postID + "/replies");
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

    location.reload();
  };

  useEffect(() => {
    getPostAllComents(postID);
  }, [, dispatch]);

  return (
    <>
      <Navbar></Navbar>
      {pwModalOpen && <PasswordModal></PasswordModal>}
      {!pwModalOpen && (
        <S.PostBox>
          <ArticleContainer isWriting={false}></ArticleContainer>

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
            {currentPostComents &&
              currentPostComents.map((item) => {
                return (
                  <>
                    <PostComent
                      key={item.id}
                      author={item.author}
                      createdAt={item.createdAt}
                      content={item.content}
                      comentId={item.id}
                      reply={false}
                      secret={item.secret}
                      postId={postID}
                    ></PostComent>
                    {item.children &&
                      item.children.map((child) => {
                        return (
                          <PostComent
                            key={child.id}
                            author={child.author}
                            createdAt={child.createdAt}
                            content={child.content}
                            comentId={child.id}
                            reply={true}
                            secret={child.secret}
                            postId={postID}
                            parentComentID={item.id}
                          ></PostComent>
                        );
                      })}

                    <S.ReplyContainer
                      hidden={item.id == currentComentId ? false : true}
                    >
                      <S.ReplyTopBox>
                        <div>대댓글 작성</div>
                        <SecretBoxTextContainer></SecretBoxTextContainer>
                      </S.ReplyTopBox>
                      <S.ReplyWriteBox
                        onSubmit={(e) =>
                          postComentSubmitHandler(
                            e,
                            e.target[0].value,
                            comentWritingInfo.secret,
                            postID,
                            currentComentId
                          )
                        }
                      >
                        <input type="text" placeholder="대댓글을 입력하세요" />
                        <button>등록</button>
                      </S.ReplyWriteBox>
                    </S.ReplyContainer>
                  </>
                );
              })}
          </S.ComentListBox>
        </S.PostBox>
      )}
    </>
  );
}
