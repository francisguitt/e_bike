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
                    <C.ContactsText>Nossos Contatos</C.ContactsText>
                </C.ContactsAreaTitle>
                <C.ContactsContainer>
                    <C.ContactsContainerText>
                        <C.PhoneNumber />fASFAFASFSAFF
                    </C.ContactsContainerText>
                    <C.ContactsContainerText>
                        <C.WhatsapNumber />SAFSAFASFASFSAF
                    </C.ContactsContainerText>
                    <C.ContactsContainerText>
                        <C.CiteAdreass />ASFasfsafafasf
                    </C.ContactsContainerText>
                </C.ContactsContainer>
            </C.ContactsArea>
        </>
    )
}