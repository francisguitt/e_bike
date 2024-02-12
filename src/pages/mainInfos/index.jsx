import { useNavigate } from 'react-router-dom';
import { ButtonDark } from '../../components/Buttons/buttonDark';
import {phoneNumbers} from '../../utils/numbers';
import * as C from './style';

export const MainInfo = () => {

    const handleClick = () => {
        const numberPhone = phoneNumbers.num;
        const urlMessage = "Vim pelo site , e preciso de mais informações sobre as bikes";
        const whatsappURL = `https://api.whatsapp.com/send?phone=${numberPhone}&text=${urlMessage}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <C.MainInfoContainer>
            {/* <C.Headline>Liberte-se do Trânsito! Transforme suas Jornadas com Nossa Bicicleta Elétrica de Alta Performance.</C.Headline> */}
            {/* <C.Subheadline>Descubra a Liberdade da Mobilidade Sustentável - Mais Rápido, Mais Longe, Sem Esforço.</C.Subheadline> */}
            <ButtonDark handleClick={handleClick} name="Garanta Já A Sua !" />
            <C.List>
                <C.ListItem><C.Icon>🚀</C.Icon>Acelere Seu Dia: Fuja do trânsito e chegue mais rápido ao seu destino.</C.ListItem>
                <C.ListItem><C.Icon>🔋</C.Icon>Autonomia Incrível: Bateria de longa duração para quilômetros sem fim.</C.ListItem>
                <C.ListItem><C.Icon>💪</C.Icon>Poupe Energia: Pedale com facilidade, sem esforço desnecessário.</C.ListItem>
                <C.ListItem><C.Icon>🌿</C.Icon>Eco-Friendly: Faça parte da mudança para um planeta mais verde.</C.ListItem>
                <C.ListItem><C.Icon>🛠️</C.Icon>Manutenção Descomplicada: Design robusto e fácil de manter.</C.ListItem>
                <C.ListItem><C.Icon>🌧️</C.Icon>Pronta para Desafios: Encare qualquer clima com nossa resistência superior.</C.ListItem>
            </C.List>
            <C.MainInfoSubTitle>Objeções:</C.MainInfoSubTitle>
            <C.MainInfoObj>
                <C.List>
                    <C.ListItem><C.Icon>🚗</C.Icon>"E se a bateria acabar durante o trajeto?" Relaxa! A autonomia excepcional garante que você chegue sempre ao seu destino.</C.ListItem>
                    <C.ListItem><C.Icon>⏱️</C.Icon>"Não tenho tempo para manutenção constante." Nossa bicicleta é projetada para exigir o mínimo de esforço de manutenção, garantindo que você pedale sem preocupações.</C.ListItem>
                    <C.ListItem><C.Icon>🌦️</C.Icon>"E se chover?" Com resistência às condições climáticas, nossa bicicleta é sua aliada em qualquer tempo.</C.ListItem>
                </C.List>
            </C.MainInfoObj>
        </C.MainInfoContainer>
    );
};
