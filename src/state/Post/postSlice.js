import { createSlice } from "@reduxjs/toolkit";

// post
// {
//   id: long
//   title: String
//   content: String
//   author: UserResponseDTO
//   views: int
//   createdAt: DateTime
//   isSecret: boolean
//   isNotification: boolean
//   replies: [
//       ReplyResponseDTO
//   ]
//   // file 추가…
// }

const initialState = {
  // 모든 posts 저장하는 state
  posts: [],
  currentPage: 1,
  currentPost: {},
  totalPage: 1,
};

// 로직 : action -> dispatch(useDispatch)로 실행
const postSlice = createSlice({
  name: "post", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
    setPosts: (state, action) => {
      state.posts = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },

    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
});

export const { setPosts, setCurrentPage, setTotalPage, setCurrentPost } =
  postSlice.actions;
export default postSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
