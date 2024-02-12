import * as C from './style';
export const ButtonSecundary = ({ name, handleNavigationProducts, }) => {

    return (
        <>
            <C.ButtonArea>
                <C.Button onClick={() => handleNavigationProducts()}>
                    <C.ButtonText>{name}</C.ButtonText>
                </C.Button>
            </C.ButtonArea>
        </>
    )
}