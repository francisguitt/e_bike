import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { ButtonSucess } from '../../components/Buttons/buttonSucess';
import { ButtonWarning } from '../../components/Buttons/buttonWarning';
import {phoneNumbers} from '../../utils/numbers';
export const WhatsAppButton = ({ itemName }) => {

    const phoneNumber = phoneNumbers.num;
    const handleWhatsAppClick = () => {
        const whatsappMessage = `Olá! Estou Interesado na  Bike ${itemName}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappLink, '_blank');
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    return (
        <>
            <C.WhatsAppButtonContainer>
                <C.WhatsAppButtonTitle>
                    <C.WhatsAppButtonTitleText>
                        Você será redirecionado para conversar com um de nossos atendentes.
                    </C.WhatsAppButtonTitleText>
                </C.WhatsAppButtonTitle>


                <C.WhatsappButtonContent>
                    <C.WhatsAppButtonParagraph>deseja prosseguir ?</C.WhatsAppButtonParagraph>
                    <C.WhatsAppButtonArea>
                    <ButtonSucess handleWhatsAppClick={handleWhatsAppClick} itemName={itemName} text="Sim" />
                    <ButtonWarning handleBack={handleBack} text="Não" />
                    </C.WhatsAppButtonArea>
                </C.WhatsappButtonContent>
            </C.WhatsAppButtonContainer>
        </>

    );
}


