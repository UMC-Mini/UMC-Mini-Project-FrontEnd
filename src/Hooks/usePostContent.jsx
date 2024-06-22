import React from "react";
import { defaultInstance } from "../api/axiosInstance";
import { useDispatch } from "react-redux";
import { setCurrentPost } from "../state/post/postSlice";

async function usePostContent(postID) {
  const { data } = await defaultInstance.get("/posts/" + postID);
  console.log(data);
  dispatch(setCurrentPost(data.result));
}

export default usePostContent;
