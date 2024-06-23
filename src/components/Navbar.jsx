import { LogoBox, Navbarcontainer, LeftContainer, RightContainer } from "./Navbar.style";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Navbarcontainer>
            <LogoBox>
                <LeftContainer>
                    <h1 onClick={() => { navigate("/") }}>SMUPOOL</h1>
                    <h2>마이페이지</h2>
                </LeftContainer>
                <RightContainer onClick={() => { navigate("/mypage") }}>
                    <h3>마이페이지</h3>
                    <FaCircleUser size={60}></FaCircleUser>
                </RightContainer>
            </LogoBox>
        </Navbarcontainer>
    )
}
