import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/mypage")}>홈이다.</div>
    );
}
