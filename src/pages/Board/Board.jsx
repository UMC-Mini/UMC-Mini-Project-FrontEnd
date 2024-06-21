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

export default function Board() {
  const recentPosts = useSelector((state) => state.post.posts);
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

  const searchInputHandler = (e) => {};
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
          {/* {PostItem.map((item) => {
            return <BoardPost key={item.id} {...item} />; // 같은 이름의 props로 자동 전달
          })} */}
          {recentPosts &&
            recentPosts.map((item) => {
              console.log(item);
              return <BoardPost key={item.id} {...item} />; // 같은 이름의 props로 자동 전달
            })}
        </S.BoardBoxPostContainer>
      </S.BoardBox>
      <S.BoardBoxPageButtonContainer>
        <S.BoardBoxPageBackButton></S.BoardBoxPageBackButton>
        <div>페이지</div>
        <S.BoardBoxPageForwardButton></S.BoardBoxPageForwardButton>
      </S.BoardBoxPageButtonContainer>
      <S.SearchBox>
        <S.SearchBoxInput></S.SearchBoxInput>
        <S.SearchBoxButton
        // onClick={() => getSearchKeywordPosts()}
        ></S.SearchBoxButton>
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
