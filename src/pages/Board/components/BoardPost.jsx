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
    secret,
    notification,
    replies, // 안 씀
    isHeader,
    isTop,
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

    if (notification) {
      setBorderPx("2px");
    } else {
      setBorderPx("1px");
    }
  }, [isHeader]);

  const date = new Date(createdAt);

  return (
    <S.BoardBoxPost
      key={id}
      borderPx={borderPx}
      onClick={() => !isTop && navigate(`/board/post/` + id)}
      isTop={isTop}
    >
      <S.BoardBoxPostItem width={width[0]} marginRight={marginRight[0]}>
        {notification ? <TiPin></TiPin> : id}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[1]} marginRight={marginRight[1]}>
        {title}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[2]} marginRight={marginRight[2]}>
        {/* 여기에 author.username 이거 때문에 map 오류났었음 */}
        {!isTop ? author.nickname : "작성자"}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[3]} marginRight={marginRight[3]}>
        {!isTop
          ? date.getFullYear().toString() +
            "/" +
            (date.getMonth() + 1).toString() +
            "/" +
            date.getDate().toString()
          : "작성시간"}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[4]} marginRight={marginRight[4]}>
        {views}
      </S.BoardBoxPostItem>
    </S.BoardBoxPost>
  );
}

export default BoardPost;
