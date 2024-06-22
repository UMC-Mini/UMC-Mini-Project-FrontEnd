import React from "react";
import * as S from "./Board.style";
import BoardPost from "./components/BoardPost";
import { PostItem } from "./components/mock_data";
import Navbar from "./components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axiosInstance";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPosts,
  setCurrentPage,
  setTotalPage,
} from "../../state/post/postSlice";

// 남은거 = 검색 구현 (0) , 페이지이동 구현 (0), 글작성 구현(x), 포스트 상세 페이지 통신데이터로 구현 (0), 댓글쓰기 구현, 비밀글/댓글 체크 추적해서 post

export default function Board() {
  const recentPosts = useSelector((state) => state.post.posts);
  const currentPage = useSelector((state) => state.post.currentPage);
  const totalPage = useSelector((state) => state.post.totalPage);
  const dispatch = useDispatch();

  const HeaderUser = {
    username: "작성자",
  };

  const getPosts = async () => {
    const { data } = await defaultInstance.get("/posts");
    dispatch(setPosts(data.result.list));
    dispatch(setTotalPage(data.result.totalPage));
  };

  // const getSearchKeywordPosts = async () => {
  //   const { data } = await defaultInstance.get("/posts");
  // };

  const getSearchKeywordPosts = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const { data } = await defaultInstance.get(
      "/posts?search=" + e.target[0].value
    );
    console.log(data.result.list);
    dispatch(setPosts(data.result.list));
  };
  const pagePrevHandler = async (e) => {
    if (currentPage === 1) {
      return;
    }
    const prevPage = currentPage - 1;
    const { data } = await defaultInstance.get("/posts?page=" + prevPage);
    dispatch(setCurrentPage(prevPage));
    dispatch(setPosts(data.result.list));
  };
  const pageNextHandler = async (e) => {
    if (currentPage === totalPage) {
      return;
    }
    const nextPage = currentPage + 1;
    const { data } = await defaultInstance.get("/posts?page=" + nextPage);
    dispatch(setCurrentPage(nextPage));
    dispatch(setPosts(data.result.list));
  };

  useEffect(() => {
    getPosts();
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
        <S.BoardBoxPageBackButton
          currentPage={currentPage}
          onClick={(e) => pagePrevHandler(e)}
        ></S.BoardBoxPageBackButton>
        <div>{currentPage}</div>
        <S.BoardBoxPageForwardButton
          disable={currentPage == totalPage}
          onClick={(e) => pageNextHandler(e)}
        ></S.BoardBoxPageForwardButton>
      </S.BoardBoxPageButtonContainer>
      <S.SearchBox>
        <S.SearchBoxForm onSubmit={(e) => getSearchKeywordPosts(e)}>
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
