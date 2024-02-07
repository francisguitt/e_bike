import * as C from './style';
export const ButtonPrimary = ({ handleNavigation }) => {

    return (
        <>
            <C.ButtonArea>
                <C.Button>
                    <C.ButtonText onClick={() => handleNavigation()}>especificações</C.ButtonText>
                </C.Button>
            </C.ButtonArea>
        </>
    )
}