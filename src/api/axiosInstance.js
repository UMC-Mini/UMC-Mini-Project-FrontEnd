import axios from "axios";

// const BASE_URL = "http://3.39.75.215:8080/api/v1";
const BASE_URL = "http://43.202.8.75:8080/api/v1";

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_CARPOOL_API_KEY,
      // "X-CSRFToken": csrftoken,
    },
    // ...options,
  });
  return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
// const axiosAuthApi = (url, options) => {
//   const token = "토큰 값";
//   const instance = axios.create({
//     baseURL: url,
//     headers: { Authorization: "Bearer " + token },
//     ...options,
//   });
//   return instance;
// };

export const defaultInstance = axiosApi(BASE_URL);
// export const authInstance = axiosAuthApi(BASE_URL);
