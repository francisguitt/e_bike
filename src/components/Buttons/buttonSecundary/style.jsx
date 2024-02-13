import styled from 'styled-components';

export const ButtonArea = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 15px;
 margin-top:2.5rem;
`;

export const Button = styled.button`
  background-color:#91ee34;
  width: 300px;
  border: 0;
  outline: none;
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
@media (max-width:768px) {
    width: 300px;
    margin-top:-2rem;
}
`;


export const ButtonText = styled.h3`
 color: #636161;
 text-transform: capitalize;
`;