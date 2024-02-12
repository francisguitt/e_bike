import styled from 'styled-components';


export const ButtonArea = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 15px;
 margin-top:2.5rem;
`;


export const Button = styled.button`
 display: flex;
justify-content: center;
align-items: center;
  background-color:#1b7754;
  width: 300px;
  border: 0;
  outline: none;
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
  &:hover{
        color: #2e2ee0ac;
    }

@media (max-width:768px) {
    width: 200px;
    padding: 0;
    cursor: pointer;
}
`;


export const ButtonText = styled.h3`
 color: #fffffffc;
 text-transform: capitalize;
`;