import React from "react";
import * as S from "./SecretBoxTextContainer.style";

function SecretBoxTextContainer(props) {
  const { isPost } = props;
  // isPost => post or reply
  return (
    <S.SecretBoxTextContainer>
      <S.SecretBoxIcon></S.SecretBoxIcon>
      <S.SecretBoxText>{isPost ? "비밀글" : "비밀댓글"}</S.SecretBoxText>
      <S.SecretBoxRadio type="checkbox"></S.SecretBoxRadio>
    </S.SecretBoxTextContainer>
  );
}

export default SecretBoxTextContainer;
