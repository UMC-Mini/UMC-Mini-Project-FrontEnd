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
import PasswordModal from "../Post/components/PasswordModal";

// 남은거 = 글작성 구현, 대댓글쓰기 구현

export default function Board() {
  const recentPosts = useSelector((state) => state.post.posts);
  const currentPage = useSelector((state) => state.post.currentPage);
  const totalPage = useSelector((state) => state.post.totalPage);
  const pwModalOpen = useSelector((state) => state.post.pwModalOpen);
  const dispatch = useDispatch();

  const HeaderUser = {
    username: "작성자",
  };

  const getPosts = async () => {
    const { data } = await defaultInstance.get("/posts");
    dispatch(setPosts(data.result.list));
    dispatch(setTotalPage(data.result.totalPage));
  };

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
        {/* {pwModalOpen && <PasswordModal></PasswordModal>} */}
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
            recentPosts.map((item, index) => {
              index += 1;
              return <BoardPost key={item.id} index={index} {...item} />; // 같은 이름의 props로 자동 전달
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
