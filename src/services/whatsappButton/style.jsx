import styled from 'styled-components';


export const WhatsAppButtonContainer = styled.div`
height: 100vh;
background-color: #ddd;
`;

export const WhatsAppButtonParagraph = styled.h3`
text-align: center;
color: #636363;
text-transform: capitalize;
`;

export const WhatsAppButtonArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* flex-direction: column; */
padding: 0;
margin: 0 10px;
@media (max-width:768px) {
    display: flex;
    max-width: 800px;
    width: 100%;
    margin: auto;
    flex-direction: column;
 }
`;

export const WhatsAppButtonTitle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 max-width: 700px;
    width: 100%;
    margin: auto;
 @media (max-width:768px) {
    display: flex;
    max-width: 800px;
    width: 90%;
    margin: auto;
 }
`;

export const WhatsAppButtonTitleText = styled.h2`
color: #0f0606b2;
font-size: 30px;
text-align: center;
@media (max-width:768px) {
    max-width: 500px;
    width: 100%;
    padding: 10px;
    text-align: center;
   font-size: 30px;
 }
`;

export const WhatsappButtonContent = styled.div``;
