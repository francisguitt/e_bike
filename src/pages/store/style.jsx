
import styled, { keyframes } from "styled-components";
import { Timer } from '../../icons';
import park from '../../assets/park.webp';

export const StoreContainer = styled.div`
display: flex;
max-width: 1280px;
width: 100%;
height: 50vh;
margin: auto;
background-image: url(${park});
  background-position: center;
  background-size:cover

/* padding: 20px; */
`;

export const StoreContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 1280px;
  width: 100%;
@media (max-width:768px){
  max-width: 1280px;
  width: 100%;
}
`;

export const StoreContainerTitleText = styled.h1`
  font-size: 35px;
  color: #f8f8f8f4;
  padding: 10px;
  background-color: #000000be;
`;


const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* export const SpinningTimer = styled(Timer)` */
  /* font-size: 45px;
  margin-left: 3rem;
  font-weight: bold;
  color: #052977fb;
  background-color: #fffffff8;
  animation: ${spinAnimation} 2s linear infinite;  */
// `;
