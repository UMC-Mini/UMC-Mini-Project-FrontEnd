import React from "react";
import { defaultInstance } from "../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPost } from "../redux/postSlice";

// 일반글은 password에 null 전달
async function usePostContent(postID, password) {
  const posts = useSelector((state) => state.post.posts);
  const selectedPost = posts.find((item) => item.id === postID);
  console.log(selectedPost);

  const requestData = {
    postId: postID,
    password: password ? password : null,
  };

  // if (selectedPost.secret) {
  //   const { data } = await defaultInstance.post("/posts", requestData);
  //   console.log(data);
  //   dispatch(setCurrentPost(data.result));
  // } else {
  //   const { data } = await defaultInstance.post("/posts", requestData);
  //   dispatch(setCurrentPost(data.result));
  // }

  const { data } = await defaultInstance.post("/posts/get", requestData);
  dispatch(setCurrentPost(data.result));
}

export default usePostContent;
