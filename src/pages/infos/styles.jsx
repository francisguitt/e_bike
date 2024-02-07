import styled from 'styled-components';

export const HomeInfos = styled.article`
/* background-color: red; */
margin-top: 1rem;
`;

export const ArrowBack = styled.div`
 display: flex;
align-items: center;
justify-content: left;
   margin-left:-6rem;
   width: 10%;
   @media (max-width:768px) {
    display: flex;
align-items: center;
justify-content: left;
   margin-left:-6rem;
   padding: 6px;
   width: 25%;
   }
`;

export const HomeInfosTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 10px;
background:#dddddd22;
max-width: 1280px;
width: 100%;
margin: auto;
`;


export const HomeInfosTitleText = styled.h2`
text-transform: capitalize;
color: #ddddddc3;
`

export const HomeDetailsArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* gap: 1rem; */
max-width: 1280px;
width: 90%;
margin: auto;
/* background:#ffffff4e; */
`;

export const HomeDetails = styled.details`
   display: flex;
   justify-content: center;
   align-items:center;
  text-align: center;
  margin-top:1rem;
`;


export const HomeDetailsSumary = styled.summary`
color: #76a507;
font-size: 18.99px;
`;


export const HomeDetailsParagraphLis = styled.li`
margin-top:2rem;
font-weight: 900;
color: #f2f5f4ce;
text-transform: capitalize;
`;

export const HomeDetailsParagraph = styled.p`
font-size: 13px;
color: #ffffffbe;
`;