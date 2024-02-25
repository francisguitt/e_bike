

import styled from "styled-components";


export const HomeHedaer = styled.div`
margin-top:4rem;
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
margin:5px  auto;
border-radius: 4px;
@media(max-width:768px){
width: 95%;
padding: 10px;
background-color: rgb(63, 62, 62);
}
`;


export const HomeHeadeTitleText = styled.h2`
text-align: center;
font-weight:bold;
font-size: 39.99px;
color:#cfcacaeb;

@media(max-width:768px){
font-size: 20px;
color:#ffffffe4;
max-width: 400px;
width: 100%;
text-align: center;
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

// HeadLine____________________________________
export const HeadLine = styled.section`
padding: 20px;
max-width:1280px;
width: 50%;
margin: 2.5rem auto;
border-radius: 20px;
background-color: rgba(158, 156, 156, 0.315);

    @media(max-width:768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(63, 62, 62);
    border-radius: 10px;
    max-width: 1280px;
    width: 90%;
    margin: 0 auto;

    }
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
    background-color: #ffffff1c;
    border-radius: 5px;
    padding: 10px;
    max-width: 1280px;
    width: 90%;
    margin:10px  auto;
`;

export const ListItem = styled.li`
    font-size: 25px;
    margin-bottom: 10px;
    color: yellow;
    text-align: center;
    padding: 10px;
    width: 90%;
    border-radius: 5px;
    @media (max-width:768px) {
        font-size: 18px;
        font-size: 25px;
    }
`;

export const ListItemText = styled.p`
font-size:16.99;
color: #fff;
border-radius: 5px;
background-color: #6a6a6a36;
padding: 10px;
margin-top: 1rem;
@media (max-width:768px) {
        font-size: 17px;
   
    }
`; 


export const Icon = styled.span`
    margin-right: 10px;
    font-size: 30px;
`;



// HeadLine____________________________________

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


// +++++++++++++++++++++++++++++++++++++++++++++

export const HomePreview_2 = styled.div`
/* display: flex; */
/* background-color: red; */

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


export const HomePreviewArea_2 = styled.div`
display: flex;
justify-content: center;
margin: 25px 0;
/* background-color: green; */
max-width: 900px;
width: 100%;
margin: 4rem auto;
padding: 10px;
@media(max-width:768px){
    display: flex;
    flex-direction: column;
    max-width: 450px;
    padding: 0;
}
`;

export const HomePictureBox_2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
/* gap: 2rem; */
/* flex-direction: column; */
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


// ++++++++++++++++++++++++++++++++++++++++++++++++


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
color: #ffff00c7;
margin-left: 1rem;
`;


export const HomeDescription = styled.p`
color: #dddddd;
margin-left: 1rem;
`;
