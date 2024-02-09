import * as C from './style';
export const ButtonWarning = ({ handleBack, text }) => {

    return (
        <>
            <C.ButtonArea>
                <C.Button>
                    <C.ButtonText onClick={() => handleBack()}>{text}</C.ButtonText>
                </C.Button>
            </C.ButtonArea>
        </>
    )
}