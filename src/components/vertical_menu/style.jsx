

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
  animation: ${fadeInOut} 0.3s ease-in-out;
  }
`;


export const MenuVerticalNavLink = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #686867f8;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  height: 80px;
 z-index: 999;
  @media (max-width:768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5rem;
    margin:4.1rem 0;
  }
`;


export const VerticalMenuLink = styled(Link)`
     margin-top: 2rem;
    margin: 0 10px;
    font-size: 18px;
    padding: 2px;
    text-decoration: none;
    font-weight: bold;
    color: ${({ selected }) => (selected ? '#baf360' : '#ebf436b3')};

`;
