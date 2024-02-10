import styled from 'styled-components';
import { Arrow } from '../../icons';
export const AboutArea = styled.div`
background-color:#f0ecec;
max-width: 1280px;
width: 100%;
height: 100vh;
margin: auto;
padding: 0;
`;

export const AbouteAreaTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* flex-direction: column; */
background-color: #353533;
padding: 8px;

`;


export const AboutArrowBack = styled.div`
display: flex;
align-items: center;
background-color: green;
`;


export const ArrowBack = styled(Arrow)`
margin-left:-10rem;
color: #eaf1e8e2;
font-size: 45px;
 @media(max-width:768px) {
    margin-left:-5rem;
    cursor: pointer;
} 
`;

export const AboutAreaText = styled.h2`
color: #ffffffe0;
text-align: center;
font-size: 35px;
margin:20px 10px;
`;


export const AboutAreaContainer = styled.div`
padding: 10px;
margin: 5px;
`;


export const AboutAreaContent = styled.div`
max-width: 900px;
width: 100%;
margin: auto;
`;


export const AboutAreaParagraph = styled.p`
 color: #080808;
 font-size: 25px;
 @media(max-width:768px) {
    font-size: 18.99px;
}
`;