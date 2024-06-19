import React, { useEffect } from "react";
import * as S from "./BoardPost.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiPin } from "react-icons/ti";

function BoardPost(props) {
  // const { id, title, writer, writeTime, views, isHeader, isHighlight } = props;
  const {
    id,
    title,
    content, // 안 씀
    author,
    views, // 안 씀
    createdAt, // 안 씀
    isSecret,
    isNotification,
    replies, // 안 씀
    isHeader,
  } = props;

  const navigate = useNavigate();

  const [width, setWidth] = useState(["10%", "10%", "10%", "15%", "10%"]);
  const [marginRight, setMarginRight] = useState([
    "25%",
    "10%",
    "5%",
    "3%",
    "2%",
  ]);
  const [borderPx, setBorderPx] = useState();

  useEffect(() => {
    if (isHeader) {
      setWidth(["10%", "10%", "10%", "15%", "10%"]);
      setMarginRight(["20%", "15%", "10%", "0%", "0%"]);
    } else {
      setWidth(["5%", "50%", "20%", "20%", "5%"]);
      setMarginRight([0, 0, 0, 0, 0]);
    }

    if (isNotification) {
      setBorderPx("2px");
    } else {
      setBorderPx("1px");
    }
  }, [isHeader]);

  return (
    <S.BoardBoxPost
      key={id}
      borderPx={borderPx}
      onClick={() => navigate(`/board/post/` + id)}
    >
      <S.BoardBoxPostItem width={width[0]} marginRight={marginRight[0]}>
        {isNotification ? <TiPin></TiPin> : id}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[1]} marginRight={marginRight[1]}>
        {title}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[2]} marginRight={marginRight[2]}>
        {author.username}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[3]} marginRight={marginRight[3]}>
        {createdAt}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[4]} marginRight={marginRight[4]}>
        {views}
      </S.BoardBoxPostItem>
    </S.BoardBoxPost>
  );
}

export default BoardPost;
