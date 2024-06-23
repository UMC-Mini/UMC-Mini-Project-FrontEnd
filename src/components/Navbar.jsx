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
                <RightContainer>
                    <h3 onClick={() => { navigate("/mypage") }}>마이페이지</h3>
                    <FaCircleUser size={40}></FaCircleUser>
                </RightContainer>
            </LogoBox>
        </Navbarcontainer>
    )
}
