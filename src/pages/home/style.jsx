

import styled from "styled-components";
export const HomeHedaer = styled.div`
/* padding:10px; */
`;

export const HomeHeaderPicture = styled.div`
 display: flex;
 justify-content: center;
 padding: 8px;
 /* background-color: #a7a5a51c; */
 max-width: 1280px;
 width: 100%;
 margin: auto;

 @media(max-width:768px){
display: flex;
 justify-content: center;
 padding: 8px;
 max-width: 1280px;
 width: 95%;
 margin: auto;
}
`;

export const HomeHeaderTitle = styled.div``;


export const HomeHeadeTitleText = styled.h2`
text-align: center;
font-weight:bold;
font-size: 35px;
color:#cfcaca2d;
background-color: #ffffff11;
@media(max-width:768px){
font-size:30.99px;
color:#fafafaba;
}
`;


export const HomeHedaerPicture = styled.div`
display: flex;
justify-content: center;
align-items: centers;
text-align: center;
padding: 0;
max-width: 1280px;
width: 100%;
margin: auto;
@media(max-width:768px){
    display: flex;
justify-content: center;
align-items: centers;
text-align: center;
}
`;


export const HomeHedaerPictureImg = styled.img`
   width: 100%;
    border-radius: 10px;
    margin-top: 1rem;

    @media(max-width:768px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
}
`;


export const HomeSlider = styled.div`
width: 100%;
@media(max-width:768px){

}
`;

export const HomeSliderImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
`;

export const HomeSliderBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 90%; 
    padding: 10px;
    max-width: 400px;
    margin: 10px; 
`;

export const HomeSliderPreviewImg = styled.img`
    width: 100%;
    max-width: 400px; 
    /* border-radius: 10px; */
    margin-top: 1rem;
`;



export const HomeSliderTitleArea = styled.div`
margin:0 15px;
background: #dddddd1c;
width: 100%;
`;

export const HomeSliderTitle = styled.h2`
color: #dde4e7ef;
margin-left: 1rem;
`;

export const HomeSliderDescription = styled.p`
color: #dddddd96;
margin-left: 1rem;
`;





// -_____________________________________________________

export const HomePreview = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
`;

export const HomePreviewArea = styled.div`
display: flex;
`;

export const HomePicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 6px;
border-radius: 6px;
/* background-color: #555555; */
@media(max-width:768px){
    display: flex;
    flex-direction: column;
}
`;

export const HomePictureBox = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 90%; 
    padding: 10px;
    max-width: 400px;
    margin: 10px; 

`;

export const HomePreviewImg = styled.img`
   width: 80%;
    max-width: 400px; 
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    margin-top: 1rem;

    @media (max-width:768px){
        width: 110%;
    max-width: 400px; 
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    margin-top: 1rem;
}
`;

export const HomeTitleArea = styled.div`
/* margin:0 15px; */
background: #dddddd1c;
width: 80%;
@media (max-width:768px){
    width: 110%; 
}
`;

export const HomeTitle = styled.h2`
color: #dad7d7;
margin-left: 1rem;

`;


export const HomeDescription = styled.p`
color: #ddddddc3;
margin-left: 1rem;
`;

// _________________________________

export const HomeInfos = styled.article`
/* background-color: red; */
`;

export const HomeInfosTitle = styled.div``;
export const HomeInfosTitleText = styled.h2`
text-transform: capitalize;
color: #ddddddc7;
`

export const HomeDetails = styled.details`
//seria details
display: flex;
justify-content: center;
align-items: center;
text-align: center; 
flex: 1;
border: 1px solid #00000013;
padding: 6px;
width: 100%;
background:#FFFFFF;
@media (max-width:768px) {
 display: flex;
justify-content: center;
align-items: center;
text-align: center; 
flex: 1;
border: 1px solid #00000013;
padding: 6px;
margin: auto;
width: 90%;
background:#FFFFFF;
}
`;

export const HomeDetailsArea = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: #ffffff;
`;

export const HomeDetailsSumary = styled.summary`
//seria sumary
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 17.99px;
font-weight: bold;
color: #00000088;
/* background:#ddddddb5; */
text-transform: capitalize;
`;


export const HomeDetailsParagraphLis = styled.li`
margin-top:2rem;
font-weight: 900;
color: #0b1110df;
text-transform: capitalize;
`;

export const HomeDetailsParagraph = styled.p`
font-size: 13px;
color: #131212c6;
`;