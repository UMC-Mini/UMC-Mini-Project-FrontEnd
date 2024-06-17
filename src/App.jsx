import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import MyPage from "./pages/MyPage/MyPage.jsx";
import Board from "./pages/Board/Board.jsx";
import Post from "./pages/Post/Post.jsx";
import Chatting from "./pages/Chatting/Chatting.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

//라우팅 정리
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "SignUp", element: <SignUp /> },
      { path: "MyPage", element: <MyPage /> },
      { path: "Board", element: <Board /> },
      { path: "Board/post/:postID", element: <Post />},
      { path: "Chatting/:chatID", element: <Chatting /> },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
