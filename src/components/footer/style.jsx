import styled from 'styled-components';

import { FacebookIcon, Instagram, Twitter } from '../../icons';


export const FooterContainer = styled.footer`
background-color: #535353b3;
padding: 10px;
`;

export const FooterContent = styled.div`
display: flex;
flex-direction: column;
max-width: 1280px;
width: 90%;
margin: auto;
 padding: 8px;

`;

export const FooterContentInfos = styled.div`
display: flex;
 justify-content: center;
padding: 10px;
`;


export const FooterIcons = styled.div`
text-align: center;
`;


export const FacebookIcons = styled(FacebookIcon)`
font-size: 40px;
margin:0 5px;
color: #0c0c53fd;
`
export const InstagramIcons = styled(Instagram)`
font-size: 40px;
margin:0 5px;
color: #e1306bc3;
`;

export const TwitterIcons = styled(Twitter)`
font-size: 40px;
margin:0 5px;
color:#3270aa;
`;

export const FooterRightReserved = styled.div`
text-align: center;
padding: 0;
`;

export const FooterRightReservedText = styled.p`
font-size: 20px;
color: #e4e4e493;
@media (max-width:768px) {
 font-size:13px;
}
`;

export const FooterAuthor = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;


export const FooterAuthorText = styled.a`
  color: #1d1f1dcf;
  font-size: 13.99px;
  text-decoration: none;
`;

export const IconHeart = styled.span`
color:#a74343;
 :visited{
    color:#ddddddce;
 }
`;

