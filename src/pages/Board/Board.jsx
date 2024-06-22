import React from "react";
import * as S from "./Board.style";
import BoardPost from "./components/BoardPost";
import { PostItem } from "./components/mock_data";
import Navbar from "./components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axiosInstance";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../state/post/postSlice";

// 남은거 = 검색 구현 , 페이지이동 구현, 글작성 구현, 포스트 상세 페이지 통신데이터로 구현, 댓글쓰기 구현, 비밀글/댓글 체크 추적해서 post

export default function Board() {
  const recentPosts = useSelector((state) => state.post.posts);
  const currentPage = useSelector((state) => state.post.currentPage);
  const dispatch = useDispatch();

  const HeaderUser = {
    username: "작성자",
  };

  const getAllPosts = async () => {
    const { data } = await defaultInstance.get("/posts");
    dispatch(setPosts(data.result));
  };

  const getSearchKeywordPosts = async () => {
    const { data } = await defaultInstance.get("/posts");
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const { data } = await defaultInstance.get(
      "/posts?search=" + e.target[0].value
    );
    console.log(data.result);
    dispatch(setPosts(data.result));
  };
  const pageNextHandler = (e) => {};
  const pagePrevHandler = (e) => {};

  useEffect(() => {
    getAllPosts();
    // getSearchKeywordPosts();
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <S.Container>
      <Navbar></Navbar>
      <S.BoardBox>
        <S.BoardBoxHeader>문의 게시판</S.BoardBoxHeader>
        <S.BoardBoxPostContainer>
          <BoardPost
            id="No"
            title="제목"
            author={HeaderUser}
            createdAt="작성시간"
            views="조회수"
            isTop="true"
          ></BoardPost>
          {recentPosts &&
            recentPosts.map((item) => {
              console.log(item);
              return <BoardPost key={item.id} {...item} />; // 같은 이름의 props로 자동 전달
            })}
        </S.BoardBoxPostContainer>
      </S.BoardBox>
      <S.BoardBoxPageButtonContainer>
        <S.BoardBoxPageBackButton></S.BoardBoxPageBackButton>
        <div>{currentPage}</div>
        <S.BoardBoxPageForwardButton></S.BoardBoxPageForwardButton>
      </S.BoardBoxPageButtonContainer>
      <S.SearchBox>
        <S.SearchBoxForm onSubmit={(e) => searchSubmitHandler(e)}>
          <S.SearchBoxInput></S.SearchBoxInput>
          <S.SearchBoxButton></S.SearchBoxButton>
        </S.SearchBoxForm>

        <S.SearchBoxWritingButton
          onClick={() => {
            navigate("/board/post/write");
          }}
        >
          글쓰기
        </S.SearchBoxWritingButton>
      </S.SearchBox>
    </S.Container>
  );
}
