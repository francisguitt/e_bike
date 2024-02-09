import styled ,{keyframes} from 'styled-components';
import { Whatsapp } from '../../icons';

const waveAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d36522; 
  color:#25d366;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e; /* Cor de destaque do WhatsApp */
  }

  &:focus {
    outline: none;
  }
`;

export const WhatsappButton = styled(Whatsapp)`
font-size: 35px;
font-size: 35px;
  animation: ${waveAnimation} 2s ease-in-out infinite;
/* color: #f8f8f8;  */
/* background-color: #25d366;  */
`;