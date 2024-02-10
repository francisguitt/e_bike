import styled from 'styled-components';
import { Phone, Arrow, Whatsapp, City } from '../../icons';


export const ContactsArea = styled.div`
background-color: #ffffff;
max-width: 1280px;
width:100%;
margin: auto;
height: 100vh;
`;

export const ContactsArrowLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowBack = styled(Arrow)`
font-size: 45px;
color: #ffffffd8;
margin-left: -10rem;
cursor: pointer;
@media (max-width:768px) {
      margin-left: -5rem;
}
`;

export const ContactsAreaTitle = styled.div`

display: flex;
align-items: center;
justify-content: center;
height: 80px;
background-color: #252424cc;
`;




export const ContactsText = styled.h2`
font-size: 25px;
color:#dddddd;
`;



export const ContactsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
margin: 35px 25px;
@media (max-wdth:768px){
    display: flex;
flex-direction: column;
margin: 35px 25px;
}

`;

export const ContactsContainerText = styled.p`
display: flex;
align-items: center;
`;

export const PhoneNumber = styled(Phone)`
font-size: 30px;
margin: 0 15px;
color: #1675f0;
`;

export const WhatsapNumber = styled(Whatsapp)`
font-size: 30px;
margin: 0 15px;
color: #36a53f;
`;

export const CiteAdreass = styled(City)`
font-size: 30px;
margin: 0 15px;
color: #e66e5e;
`

