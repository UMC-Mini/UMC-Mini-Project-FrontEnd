import React, { useEffect } from "react";
import * as S from "./ArticleContainer.style";
import { defaultInstance } from "../../../api/axiosInstance";
import { useParams } from "react-router-dom";

function ArticleContainer(props) {
  const { isWriting } = props;
  const { postID } = useParams();
  // console.log(postID);

  const getPostContent = async (id) => {
    const { data } = await defaultInstance.get("/posts/" + id);
    console.log(data);
  };

  useEffect(() => {
    getPostContent(postID);
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
            <div>제목입니다</div>
            <S.HeaderUserBox>작성자 : ...</S.HeaderUserBox>
          </S.HeaderBox>
          <S.ContentBox></S.ContentBox>
        </>
      )}
    </S.BoardBox>
  );
}

export default ArticleContainer;
