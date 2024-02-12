

import styled from 'styled-components';

export const MainInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Headline = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

export const Subheadline = styled.h2`
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export const MainInfoSubTitle = styled.h3``;


export const MainInfoObj = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
max-width:600px;
text-align: center;
width:100%;
margin:auto;
@media (max-width:768px){
 text-align: left;
}
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    margin-bottom: 10px;
`;

export const Icon = styled.span`
    margin-right: 10px;
    font-size: 25px;
`;