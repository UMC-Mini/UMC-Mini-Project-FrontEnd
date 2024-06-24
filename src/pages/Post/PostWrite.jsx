import React from "react";
import * as S from "./PostWrite.style";
import Navbar from "../Board/components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SecretBoxTextContainer from "./components/SecretBoxTextContainer";
import ArticleContainer from "./components/ArticleContainer";
import { defaultInstance } from "../../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setPostWritingInfo } from "../../redux/postSlice";

function PostWrite() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postWritingInfo = useSelector((state) => state.post.postWritingInfo);

  // post 작성 api 요청
  const usePostArticle = async () => {
    const requestData = postWritingInfo;
    await defaultInstance.post("/posts", requestData);
  };

  // 작성 form 제출 이벤트 핸들러
  const writeSubmitHandler = (e) => {
    e.preventDefault();
    usePostArticle();
    navigate("/board");
  };

  // 비밀번호 변경 이벤트 핸들러
  const pwChangeHandler = (e) => {
    dispatch(
      setPostWritingInfo({ ...postWritingInfo, password: e.target.value })
    );
  };
  return (
    <S.Container>
      <Navbar></Navbar>
      <S.BoardBox>
        <ArticleContainer isWriting={true}></ArticleContainer>
        <S.FooterBox>
          {/* 파일 첨부 작동 안함 */}
          <S.AttachmentBox>
            <S.AttachmentBoxButton>파일 선택</S.AttachmentBoxButton>
            <S.AttachmentBoxInput
              type="file"
              multiple="true" // multiple 로 써도 됨
              // hidden
            ></S.AttachmentBoxInput>
          </S.AttachmentBox>
          <S.SubmitBox
            onSubmit={(e) => {
              writeSubmitHandler(e);
            }}
          >
            <SecretBoxTextContainer isPost={true}></SecretBoxTextContainer>
            <S.SecretBoxPWInput
              placeholder="비밀번호를 입력"
              onChange={(e) => pwChangeHandler(e)}
              disabled={!postWritingInfo.secret}
            ></S.SecretBoxPWInput>
            <S.SubmitBoxButton>작성</S.SubmitBoxButton>
          </S.SubmitBox>
        </S.FooterBox>
      </S.BoardBox>
    </S.Container>
  );
}

export default PostWrite;
