import * as S from './Chatbot.style'
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Chatting from './Chatting'
import axios from 'axios';

const Chatbot = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200); // 애니메이션 시간과 동일하게 설정
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Zㄱ-ㅎ가-힣]*$/;
    setIsNameValid(regex.test(value));
    setName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{11}$/;
    setIsPhoneValid(regex.test(value));
    setPhone(value);
  };

  const handleStartChat = () => {
    if (name && phone && isNameValid && isPhoneValid) {
      setIsChatOpen(true);
    }
  };

  const handleBack = () => {
    setIsChatOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/chatbot', {
        name: name,
        phone: phone,
      });

      if (response.status === 200) {
        setMessage('상담이 시작되었습니다.');
      }
    } catch (error) {
      console.error('상담 시작 중 오류가 발생했습니다:', error);
      setMessage('상담 시작 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const isFormValid = name && phone && isNameValid && isPhoneValid;

  return (
    <S.Container isClosing={isClosing}>
      <S.Close onClick={handleClose}><IoIosClose size="40px"/></S.Close>

      {isChatOpen ? (
        <Chatting onBack={handleBack} />
      ) : (
        <form onSubmit={handleSubmit}>
          <S.Header>
            <p>슴우풀 실시간 상담소입니다.</p>
            <p>실시간 상담 시간은 평일 9시부터 18시까지입니다.</p>
          </S.Header>
          <S.Content>
            <label>성함을 입력해 주세요.</label>
            <input type="text" value={name} onChange={handleNameChange} />
            <S.ErrorMessage visible={!isNameValid}>성함은 영어 또는 한글만 입력 가능합니다.</S.ErrorMessage>
            <label>전화번호를 입력해 주세요.</label>
            <input type="text" value={phone} onChange={handlePhoneChange} placeholder='ex) 01012345678' />
            <S.ErrorMessage visible={!isPhoneValid}>전화번호는 11자리의 숫자만 입력 가능합니다.</S.ErrorMessage>
          </S.Content>
          <S.Button isActive={isFormValid}>
            <button type="button" onClick={handleStartChat} disabled={!isFormValid}>상담 시작하기</button>
          </S.Button>
        </form>
      )}
    </S.Container>
  );
};

export default Chatbot;