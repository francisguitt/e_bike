// style.js

import styled from 'styled-components';

export const FormContainer = styled.div`
margin-top:5rem;
`;

export const Titlearea = styled.div`
 display: block;
 max-width: 500px;
 width: 100%;
 text-align: center;
 margin: auto;
 @media (max-width:768px) {
    text-align: center;
    margin: auto;
 max-width: 300px;
}
 `;


export const TitleAreaText = styled.h1`
 color:#ddd;
 `;


export const FormArea = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
max-width: 1280px;
width: 100%;
margin: auto;
@media (max-width:768px) {
  
}
`;



export const FormGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
padding: 10px;
    margin-bottom: 6px;
     width: 90%;
    label {
    display: block;
    color:#ddd;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 75%;
        padding: 15px;
        border-radius: 5px;
        background-color: #f3f3f3;
        border: 1px solid #636262;
        outline: none;
        @media (max-width:768px) {
        width: 92%;
    }
    }

    span {
        color: red;
        font-size: 0.9rem;
    }
`;

export const SubmitButton = styled.button`
    padding: 13px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
     margin: 1.5rem 0;
    width: 350px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        cursor: pointer;
        background-color: #0056b3;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 18px;
    }
`;

