import {useState} from 'react';
import * as S from './Home.style'
import handImage from '../../assets/hand.webp'
import portal from '../../assets/Portal.png'
import portal2 from '../../assets/Portal2.png'
import star from '../../assets/Star.png'
import star2 from '../../assets/Star2.png'
import mypage from '../../assets/mypage.png'
import Chatbot from '../Chatting/Chatbot';

const Home = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const handleChatbotToggle = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <S.Container>
      <S.Left>
        <img src={portal} className='portal'/>
        <img src={portal2} className='portal2' />
        <img src={star} className='star' />
        <img src={star2} className='star2' />
        <img src={handImage}/>
      </S.Left>
      <S.Right>
        <S.Welcome><img src={mypage}/><p>24학번 김슴우님 스뮤풀에 오신 것을 환영합니다!</p></S.Welcome>
        <S.Title>상명대 카풀 매칭 서비스<br />스뮤풀 SMUPOOL</S.Title>
        <S.Button>
          <button>문의사항</button>
          <button onClick={handleChatbotToggle}>실시간 상담</button>
        </S.Button>
        {chatbotVisible && <Chatbot onClose={() => setChatbotVisible(false)} />}
      </S.Right>
    </S.Container>
  )
}

export default Home;