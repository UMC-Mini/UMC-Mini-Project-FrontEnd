import React, { useEffect } from "react";
import * as S from "./BoardPost.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiPin } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPostId,
  setCurrentPost,
  setPwModalOpen,
} from "../../../state/post/postSlice";
import PasswordModal from "../../Post/components/PasswordModal";

function BoardPost(props) {
  // const { id, title, writer, writeTime, views, isHeader, isHighlight } = props;
  const {
    index,
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
  const dispatch = useDispatch();
  const pwModalOpen = useSelector((state) => state.post.pwModalOpen);
  const currentPostId = useSelector((state) => state.post.currentPostId);

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

  const postItemClickHandler = (e) => {
    dispatch(setCurrentPostId(id));
    // console.log(id, currentPostId);
    const useGetSelectedPostContent = async (password) => {
      const { data } = await defaultInstance.post("/posts/get", {
        postId: id,
        password: password,
      });
      console.log(data);
      dispatch(setCurrentPost(data.result));
    };

    if (isTop) {
      return;
    }
    if (secret) {
      dispatch(setPwModalOpen(true));
      navigate(`/board/post/` + id);
    } else {
      useGetSelectedPostContent(null);
      navigate(`/board/post/` + id);
    }
    // console.log(secret);
    // navigate(`/board/post/` + id);
  };

  return (
    <S.BoardBoxPost
      // key={id}
      borderPx={borderPx}
      onClick={(e) => postItemClickHandler(e)}
      isTop={isTop}
    >
      {/* {secret ? <PasswordModal></PasswordModal> : null} */}
      <S.BoardBoxPostItem width={width[0]} marginRight={marginRight[0]}>
        {notification ? <TiPin></TiPin> : index}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[1]} marginRight={marginRight[1]}>
        <p>{title}</p>
        <span>{secret && <CiLock></CiLock>}</span>
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
