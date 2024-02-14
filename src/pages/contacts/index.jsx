import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { phoneNumbers } from '../../utils/numbers';
import { Email } from '../../utils/emails';
import { Company } from '../../utils/company';
export const Contacts = () => {

    const phoneNumber = phoneNumbers.num;
    const email = Email.email;
    const company = Company.company;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }

    return (

        <>
            <C.ContactsArea>
                <C.ContactsAreaTitle>
                    <C.ContactsArrowLeft>
                        <C.ArrowBack onClick={handleNavigate} />
                    </C.ContactsArrowLeft>
                    <C.ContactsText> Contatos</C.ContactsText>
                </C.ContactsAreaTitle>

                <C.ContactsContainer>
                    <C.ContactsContainerCard>

                        <C.ContactsContainerTextArea>
                            <C.WhatsapNumber />
                            <C.ContactsContainerParagraph>
                                {phoneNumber.slice(2)}
                            </C.ContactsContainerParagraph>
                        </C.ContactsContainerTextArea>

                        <C.ContactsContainerTextArea>
                            <C.ContactsContainerParagraph>
                                <C.ContactEmail />{email}
                            </C.ContactsContainerParagraph>
                        </C.ContactsContainerTextArea>

                        <C.ContactsContainerTextArea>
                            <C.ContactsContainerParagraph>
                                <C.Company />{company}
                            </C.ContactsContainerParagraph>
                        </C.ContactsContainerTextArea>

                    </C.ContactsContainerCard>
                </C.ContactsContainer>
            </C.ContactsArea>
        </>
    )
}