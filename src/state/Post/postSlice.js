import { createSlice } from "@reduxjs/toolkit";

// 객체로 여러 개의 장바구니 항목들을 id별로 따로 관리

const initialState = {
  // post 정보
  // reply 정보
};

// 로직 : action -> dispatch(useDispatch)로 실행
const postSlice = createSlice({
  name: "post", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
