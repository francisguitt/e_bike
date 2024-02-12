import * as C from './style';
export const ButtonDark = ({ handleClick,name }) => {

    return (
        <>
            <C.ButtonArea>
                <C.Button onClick={() => handleClick()}>
                    <C.ButtonText>{name}</C.ButtonText>
                </C.Button>
            </C.ButtonArea>
        </>
    )
}