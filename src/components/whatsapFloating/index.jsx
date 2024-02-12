
import * as C from './style';
import {phoneNumbers} from '../../utils/numbers';
export const FloatingWhatsApp = () => {

    const handleClick = () => {
        const numberPhone = phoneNumbers.num;
        const urlMessage = "Vim pelo site , e preciso de mais informações sobre as bikes";
        const whatsappURL = `https://api.whatsapp.com/send?phone=${numberPhone}&text=${urlMessage}`;
        window.open(whatsappURL, '_blank');
    };
    return (

        <C.ButtonContainer onClick={handleClick}>
            <C.WhatsappButton />
        </C.ButtonContainer>


    );
}


