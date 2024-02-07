import styled from 'styled-components';

export const ButtonArea = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 15px;
 margin-top:2.5rem;
`;

export const Button = styled.button`
  background-color:#0e7540;
  width: 300px;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
@media (max-width:768px) {
    width: 180px;
}
`;


export const ButtonText = styled.h3`
 color: #f7f7f7c7;
 text-transform: capitalize;
`;