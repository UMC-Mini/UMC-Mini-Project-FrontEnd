import { useParams } from "react-router-dom";
import Navbar from "../Board/components/Navbar/Navbar";
import ArticleContainer from "./components/ArticleContainer";
import * as S from "./Post.style";
import { useEffect } from "react";
import SecretBoxTextContainer from "./components/SecretBoxTextContainer";
import { defaultInstance } from "../../api/axiosInstance";
import PostComent from "./components/PostComent";

export default function Post() {
  const { postID } = useParams();
  const getAllrepliesOfPost = async () => {
    const { data } = await defaultInstance.get("/posts/" + postID + "/replies");
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
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
        <S.ComentWriteBox>
          <S.ComentWriteBoxInput type="text" placeholder="댓글을 입력하세요" />
          <S.ComentWriteBoxButton>등록</S.ComentWriteBoxButton>
        </S.ComentWriteBox>
        <S.ComentListBox>
          <PostComent isReply={false}></PostComent>
          <PostComent isReply={true}></PostComent>
          <PostComent isReply={true}></PostComent>
        </S.ComentListBox>
      </S.PostBox>
    </>
  );
}
