import * as C from './style';
import { useNavigate } from 'react-router-dom';
export const About = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }

    return (
        <>
            <C.AboutArea>
                <C.AbouteAreaTitle>
                    <C.AboutArrowBack>
                        <C.ArrowBack onClick={handleNavigate} />
                    </C.AboutArrowBack>
                    <C.AboutAreaText>Sobre Nós</C.AboutAreaText>
                </C.AbouteAreaTitle>

                <C.AboutAreaContainer>
                    <C.AboutAreaContent>
                        <C.AboutAreaParagraph>
                            Somos orgulhosamente o distribuidor oficial da marca iNow,
                            especializados em oferecer as mais avançadas bicicletas elétricas para nossos clientes.
                            Nossa paixão pela mobilidade sustentável nos impulsiona a fornecer produtos de alta qualidade e serviço excepcional.
                            Explore nosso site para descobrir mais sobre nossa parceria com a iNow e como podemos ajudá-lo a embarcar na jornada da bicicleta elétrica.
                        </C.AboutAreaParagraph>
                    </C.AboutAreaContent>
                </C.AboutAreaContainer>
            </C.AboutArea>

        </>
    )
}