

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

export const HomeHeaderTitle = styled.div`
max-width: 1280px;
width: 50%;
margin: auto;
@media(max-width:768px){
width: 100%;
padding: 2px;
}
`;


export const HomeHeadeTitleText = styled.h2`
text-align: center;
font-weight:bold;
font-size: 35px;
color:#cfcacad3;
/* background-color: #ffffff11; */
@media(max-width:768px){
font-size:30.99px;
color:#fafafab0;
width: 100%;
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
    margin-top: 1rem;
    border-top-left-radius:10px;
   border-top-right-radius:10px;
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
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
max-width: 1280px;
width: 100%;
margin: auto;
 @media (max-width:768px) {
    display: flex;
    flex-wrap: wrap; 
    padding: 0;
} 
`;

export const HomePreviewControler = styled.div`
 display: flex;
 justify-content: center;
`;


export const HomePreviewArea = styled.div`

@media(max-width:768px){
    max-width: 450px;
    padding: 0;
}
`;

export const HomePictureBox = styled.div`
@media (max-width:768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 90%; 
    padding: 10px;
    max-width: 400px;
    margin: 10px;   
}
`;

export const HomePreviewImg = styled.img`
max-width: 250px;
border-top-left-radius:10px;
border-top-right-radius:10px;
    @media (max-width:768px){
     width: 110%;
    max-width: 450px; 
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    margin-top: 1rem;
}
`;

export const HomeTitleArea = styled.div`
background-color: #dddddd1c;
padding: 6px;
max-width: 240px;
width: 100%;
@media (max-width:768px){
    max-width:395px;
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
