import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const VerticalMenuArea = styled.div`


  @media (max-width:768px) {
 display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 140px;
  background-color: #030303;
  animation: ${fadeInOut} 0.3s ease-in-out;
  }
`;


export const MenuVerticalNavLink = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffffcf9;
  width: 100%;
  height: 80px;
 z-index: 999;

   @media (max-width:768px) {
    display: flex;
    justify-content: stretch;
    width: 100%;
    height: 5rem;
    margin:4.1rem 0;
    display: flex;
    justify-content: center;
  }
`;


export const VerticalMenuLink = styled(Link)`
     margin-top: 2rem;
    margin: 0 10px;
    font-size: 20px;
    padding: 2px;
    text-decoration: none;
    font-weight: bold;
    color: ${({ selected }) => (selected ? '#070c0ece' : '#1b7509dc')};

`;
