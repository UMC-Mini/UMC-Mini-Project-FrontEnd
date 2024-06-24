import React from "react";
import { defaultInstance } from "../api/axiosInstance";
import { useDispatch } from "react-redux";
import { setCurrentPostComents } from "../redux/postSlice";

async function usePostAllComents(postID) {
  const { data } = await defaultInstance.get("/posts/" + postID + "/replies");
  console.log(data);
  dispatch(setCurrentPostComents(data.result));
}

export default usePostAllComents;
