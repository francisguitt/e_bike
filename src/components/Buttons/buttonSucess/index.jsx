import * as C from './style';
export const ButtonSucess = ({ handleWhatsAppClick, itemName, text }) => {

    return (
        <>
            <C.ButtonArea>
                <C.Button onClick={() => handleWhatsAppClick(itemName)}>
                    <C.ButtonText>{text}</C.ButtonText>
                </C.Button>
            </C.ButtonArea>
        </>
    )
}