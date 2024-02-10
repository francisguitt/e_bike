import styled from 'styled-components';
import {MenuHamburger,Close} from '../../icons';
export const HeaderTop = styled.header`
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 999;
display: flex;
justify-content: center;
align-items: center;
padding: 6px;
background-color: #555454;
box-shadow: 5px 6px 8px rgba(255, 255, 255, 0.1);
`;

export const HeaderTopArea = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0;
`;


export const HeaderTopTitle = styled.h1`
   color: #fff;
   margin: 10px 25px;
   text-transform: uppercase;

`;

export const MenuHamburgerIcon = styled(MenuHamburger)`
color:#ddd;
font-size: 25px;
margin-left: -1rem;
`;
export const MenuClose = styled(Close)`
color:#f15757;
margin-left: -1rem;
font-size: 35px;
`;

