import { useNavigate } from 'react-router-dom';
import * as C from './style';
export const Contacts = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
           navigate("/");
    }

    return (

        <>
            <C.ContactsArea>
                <C.ContactsAreaTitle>
                    <C.ContactsArrowLeft>
                        <C.ArrowBack onClick={handleNavigate}/>
                    </C.ContactsArrowLeft>
                    <C.ContactsText> Contatos e endereços</C.ContactsText>
                </C.ContactsAreaTitle>
                <C.ContactsContainer>
                    <C.ContactsContainerText>
                        <C.PhoneNumber />: (99) 999999999
                    </C.ContactsContainerText>
                    <C.ContactsContainerText>
                        <C.WhatsapNumber />: (99) 999999999
                    </C.ContactsContainerText>
                    <C.ContactsContainerText>
                        <C.CiteAdreass />: Barueri Sp
                    </C.ContactsContainerText>
                </C.ContactsContainer>
            </C.ContactsArea>
        </>
    )
}