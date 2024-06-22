import React from "react";
import * as S from "./SecretBoxTextContainer.style";
import { setComentWritingInfo } from "../../../state/post/postSlice";
import { useDispatch, useSelector } from "react-redux";

function SecretBoxTextContainer(props) {
  const { isPost } = props;
  // isPost => post or reply

  const dispatch = useDispatch();
  const comentWritingInfo = useSelector(
    (state) => state.post.comentWritingInfo
  );
  // console.log(comentWritingInfo);

  // 비밀 글/댓글 on-off
  const secretRadioBoxClickHandler = () => {
    const newElem = { ...comentWritingInfo, secret: !comentWritingInfo.secret };
    dispatch(setComentWritingInfo(newElem));
    // console.log(comentWritingInfo);
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
