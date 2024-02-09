import styled from 'styled-components';


export const WhatsAppButtonContainer = styled.div``;

export const WhatsAppButtonParagraph = styled.p`
text-align: center;
color: #f1f1f1;
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
 max-width: 800px;
    width: 100%;
    margin: auto;
 @media (max-width:768px) {
    display: flex;
    max-width: 800px;
    width: 100%;
    margin: auto;
 }
`;

export const WhatsAppButtonTitleText = styled.h2`
color: #ddd;
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
