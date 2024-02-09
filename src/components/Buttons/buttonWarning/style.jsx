import styled from 'styled-components';

export const ButtonArea = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 15px;
 margin-top:2.5rem;
`;

export const Button = styled.button`
  background-color:#d63838;
  width: 300px;
  border: 0;
  outline: none;
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
@media (max-width:768px) {
    width: 350px;
    margin-top:-3.5rem;
}
`;


export const ButtonText = styled.h3`
 color: #f7f7f7c7;
 text-transform: capitalize;
`;