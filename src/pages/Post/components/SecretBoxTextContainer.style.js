import styled from "styled-components";
import { MdLockOutline } from "react-icons/md";

const SecretBoxTextContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const SecretBoxIcon = styled(MdLockOutline)``;
const SecretBoxText = styled.div``;
const SecretBoxRadio = styled.input``;

// const SecretBoxPWInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border-radius: 5px;
//   /* outline: none; */
// `;

export {
  SecretBoxTextContainer,
  SecretBoxIcon,
  SecretBoxText,
  SecretBoxRadio,
  // SecretBoxPWInput,
};
