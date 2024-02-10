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
                        <C.ArrowBack onClick={handleNavigate}/>
                    </C.AboutArrowBack>
                    <C.AboutAreaText>Sobre Nós</C.AboutAreaText>
                </C.AbouteAreaTitle>

                <C.AboutAreaContainer>
                    <C.AboutAreaContent>
                        <C.AboutAreaParagraph>
                            Em um movimentado bairro urbano, Andre e Erico, dois empreendedores apaixonados por inovação e sustentabilidade, encontraram-se em meio a uma revolução silenciosa: as bicicletas elétricas. Seus destinos se cruzaram em um evento de mobilidade sustentável, onde a paixão por pedalar e o desejo de contribuir para um mundo mais verde os uniram.
                        </C.AboutAreaParagraph>
                    </C.AboutAreaContent>
                </C.AboutAreaContainer>
            </C.AboutArea>

        </>
    )
}