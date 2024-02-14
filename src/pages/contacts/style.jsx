import styled from 'styled-components';
import { Phone, Arrow, Whatsapp, City, Email } from '../../icons';


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
color:#eded4d;
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

export const ContactsContainerCard = styled.section`
  background-color: #44444414;
  border-radius: 5px;
  max-width: 1280px;
  width: 90%;
  padding: 15px;
  margin: 6.99rem 5rem;
`;

export const ContactsContainerTextArea = styled.div`
display: flex;
align-items: center;
font-size: 15px;
`;

export const ContactsContainerParagraph = styled.p`
font-size: 17px;
 display: flex;
 align-items: center;
 text-align: center;
 padding: 5px;
 color: #2c840c;
`;


export const WhatsapNumber = styled(Whatsapp)`
font-size: 35px;
margin: 0 8px;
color: #36a53f;
`;


export const ContactEmail = styled(Email)`
font-size: 35px;
margin: 0 8px;
color: #fe594ae5;
`;


export const Company = styled(City)`
font-size: 35px;
margin: 0 8px;
color: #e66e5e;
`

