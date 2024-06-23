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
  const navigate = useNavigate();

  const pwInputChangeHandler = (e) => {
    // console.log(e.target.value);
    dispatch(setCurrentPassword(e.target.value));
  };

  const useGetSelectedPostContent = async (password) => {
    console.log(currentPostId, password);
    const { data } = await defaultInstance.post("/posts/get", {
      postId: postID,
      password: password,
    });
    console.log(data);
    dispatch(setCurrentPost(data.result));
  };

  const pwSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setPwModalOpen(false));
    useGetSelectedPostContent(currentPassword);
  };

  return (
    pwModalOpen && (
      <S.Container onSubmit={(e) => pwSubmitHandler(e)}>
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
