import React from "react";
import * as S from "./PasswordModal.style";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPassword,
  setCurrentPost,
  setPwModalOpen,
} from "../../../state/post/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { defaultInstance } from "../../../api/axiosInstance";
import usePostContent from "../../../Hooks/usePostContent";

function PasswordModal() {
  const dispatch = useDispatch();
  const { postID } = useParams();
  const currentPostId = useSelector((state) => state.currentPostId);
  const pwModalOpen = useSelector((state) => state.post.pwModalOpen);
  const currentPassword = useSelector((state) => state.post.currentPassword);
  const currentPost = useSelector((state) => state.post.currentPost);
  const navigate = useNavigate();

  const pwInputChangeHandler = (e) => {
    dispatch(setCurrentPassword(e.target.value));
  };

  const useGetSelectedPostContent = async (password) => {
    try {
      const { data } = await defaultInstance.post("/posts/get", {
        postId: postID,
        password: password,
      });
      // console.log(data);
      dispatch(setCurrentPost(data.result));
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const pwSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setPwModalOpen(false));
    useGetSelectedPostContent(currentPassword);
  };

  return (
    pwModalOpen && (
      <S.Container onSubmit={(e) => pwSubmitHandler(e)}>
        <div>비밀번호를 입력하세요</div>
        <S.InputBox
          type="text"
          onChange={(e) => {
            e.stopPropagation(); // prevent
            pwInputChangeHandler(e);
          }}
        />
        <S.InputButton>확인</S.InputButton>
      </S.Container>
    )
  );
}

export default PasswordModal;
