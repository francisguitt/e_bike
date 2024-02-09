import * as C from './style';
export const ButtonSecundary = ({ props, handleNavigationProducts, }) => {

    return (
        <>
            <C.ButtonArea>
                <C.Button onClick={() => handleNavigationProducts()}>
                    <C.ButtonText>{props}</C.ButtonText>
                </C.Button>
            </C.ButtonArea>
        </>
    )
}