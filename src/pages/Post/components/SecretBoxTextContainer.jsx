import React from "react";
import * as S from "./SecretBoxTextContainer.style";
import {
  setComentWritingInfo,
  setPostWritingInfo,
} from "../../../state/post/postSlice";
import { useDispatch, useSelector } from "react-redux";

function SecretBoxTextContainer(props) {
  const { isPost } = props;
  // isPost => post or reply

  const dispatch = useDispatch();
  const comentWritingInfo = useSelector(
    (state) => state.post.comentWritingInfo
  );
  const postWritingInfo = useSelector((state) => state.post.postWritingInfo);

  // slice의 정보 중 secret만 바꿈 - 비밀 글/댓글 on-off
  const secretRadioBoxClickHandler = () => {
    const newComentElem = {
      ...comentWritingInfo,
      secret: !comentWritingInfo.secret,
    };
    const newPostElem = { ...postWritingInfo, secret: !postWritingInfo.secret };
    isPost && dispatch(setPostWritingInfo(newPostElem));
    !isPost && dispatch(setComentWritingInfo(newComentElem));
    console.log(postWritingInfo);
  };

  return (
    <S.SecretBoxTextContainer>
      <S.SecretBoxIcon></S.SecretBoxIcon>
      <S.SecretBoxText>{isPost ? "비밀글" : "비밀댓글"}</S.SecretBoxText>
      <S.SecretBoxRadio
        type="checkbox"
        onClick={secretRadioBoxClickHandler}
      ></S.SecretBoxRadio>
    </S.SecretBoxTextContainer>
  );
}

export default SecretBoxTextContainer;
