import { createSlice } from "@reduxjs/toolkit";
// post
// {
//   "id": 0,
// "content": "string",
// "author": {
//   "userId": 0,
//   "name": "string",
//   "nickname": "string",
//   "updateAt": "2024-06-23T08:40:04.326Z",
//   "createAt": "2024-06-23T08:40:04.326Z"
// },
// "secret": true,
// "parentId": 0,
// "createdAt": "2024-06-23T08:40:04.326Z",
// "children": [
//   "string"
// ]
//   // file 추가…
// }

// replies
// {
//   "id": 11,
//   "content": "댓글 테스트",
//   "author": {
//       "userId": 2,
//       "name": "string",
//       "nickname": "string",
//       "updateAt": "2024-06-23T09:09:43.461552",
//       "createAt": "2024-06-23T09:09:30.26468"
//   },
//   "secret": false,
//   "parentId": null,
//   "createdAt": "2024-06-23T12:46:11.968792",
//   "children": [
//       {
//           "id": 12,
//           "content": "ㄴㅇㄹㅇㄴㄹㄴㄹㅇㄴㄹ",
//           "author": {
//               "userId": 2,
//               "name": "string",
//               "nickname": "string",
//               "updateAt": "2024-06-23T09:09:43.461552",
//               "createAt": "2024-06-23T09:09:30.26468"
//           },
//           "secret": false,
//           "parentId": 11,
//           "createdAt": "2024-06-23T12:46:18.076014",
//           "children": null
//       }
//   ]
// }

const initialState = {
  // 모든 posts 저장하는 state
  posts: [],
  currentPage: 1,
  currentPost: {},
  currentComent: {},
  currentPassword: "", // 포스트 하나 가져올 떄
  currentPostId: null,
  currentPostComents: [],
  currentComentId: null,
  currentComentParentId: null,
  postWritingInfo: {
    title: "",
    content: "",
    secret: false,
    // password: "",
    notification: false,
  },
  comentWritingInfo: {
    content: "",
    secret: false,
    postId: null,
    // parentId: null,
  }, // content, secret, postID, parentID
  totalPage: 1,
  pwModalOpen: false,
  isReplyWriting: {
    id: "",
    selected: false,
  },
  isSelected: {
    selected: null,
  },
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

    setCurrentComent: (state, action) => {
      state.currentComent = action.payload;
    },

    setCurrentPassword: (state, action) => {
      state.currentPassword = action.payload;
    },

    setCurrentPostId: (state, action) => {
      state.currentPostId = action.payload;
      console.log(state.currentPostId, action.payload);
    },

    setCurrentPostComents: (state, action) => {
      state.currentPostComents = action.payload;
    },

    setCurrentComentId: (state, action) => {
      state.currentComentId = action.payload;
    },

    setCurrentComentParentId: (state, action) => {
      state.currentComentParentId = action.payload;
    },

    setPostWritingInfo: (state, action) => {
      state.postWritingInfo = action.payload;
    },

    setComentWritingInfo: (state, action) => {
      state.comentWritingInfo = action.payload;
    },

    setPwModalOpen: (state, action) => {
      state.pwModalOpen = action.payload;
    },

    setIsReplyWriting: (state, action) => {
      state.isReplyWriting = action.payload;
    },

    setIsSelected: (state, action) => {
      state.isSelected = action.payload;
    },
  },
});

export const {
  setPosts,
  setCurrentPage,
  setTotalPage,
  setCurrentPost,
  setCurrentComent,
  setCurrentPassword,
  setCurrentPostId,
  setCurrentPostComents,
  setCurrentComentId,
  setCurrentComentParentId,
  setPostWritingInfo,
  setComentWritingInfo,
  setPwModalOpen,
  setIsReplyWriting,
  setIsSelected,
} = postSlice.actions;
export default postSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
