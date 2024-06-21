import React from "react";
import { defaultInstance } from "../api/axiosInstance";

async function getAllPosts() {
  try {
    const { data } = await defaultInstance.get("/posts");
  } catch (error) {
    return false;
  }
  return data;
}

export default getAllPosts;
