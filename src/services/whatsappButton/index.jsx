import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { ButtonSucess } from '../../components/Buttons/buttonSucess';
import { ButtonWarning } from '../../components/Buttons/buttonWarning';
export const WhatsAppButton = ({ itemName }) => {

    const phoneNumber = "11977838504"
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
                        Você sera redirecionado para comversar com um de nossos atendentes.
                    </C.WhatsAppButtonTitleText>
                </C.WhatsAppButtonTitle>


                <C.WhatsappButtonContent>
                    <C.WhatsAppButtonParagraph>proceguir ?</C.WhatsAppButtonParagraph>
                    <C.WhatsAppButtonArea>
                    <ButtonSucess handleWhatsAppClick={handleWhatsAppClick} itemName={itemName} text="Sim" />
                    <ButtonWarning handleBack={handleBack} text="Não" />
                    </C.WhatsAppButtonArea>
                </C.WhatsappButtonContent>
            </C.WhatsAppButtonContainer>
        </>

    );
}


