import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Arrow } from '../../icons';
export const Infos = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }
    return (
        <>
            <C.HomeInfos>
                <C.HomeInfosTitle>
                    <C.ArrowBack>
                        <Arrow style={
                            {
                                color: "#ddd7d7",
                                fontSize: "35px",
                            }}
                            onClick={handleNavigate}
                        />
                    </C.ArrowBack>
                    <C.HomeInfosTitleText>
                        especificações
                    </C.HomeInfosTitleText>
                </C.HomeInfosTitle>
                <C.HomeDetailsArea>

                    <C.HomeDetailsArea>
                        <C.HomeDetails>
                            <C.HomeDetailsSumary >Elétrica</C.HomeDetailsSumary>
                            <C.HomeDetailsParagraphLis>bateria</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>bateria 48v 17ah</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>carregador</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>100-240V, 2A (plugue redondo padrão AU)</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>controlador</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Controlador de 48V, 750W</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>mostrar</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>LCD retroiluminado com indicador de carga, velocímetro, hodômetro, hodômetro parcial, nível de assistência ao pedal, relógio e muito mais
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>motor do cubo</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Motor de cubo com engrenagem sem escova de 750 W</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>velocidade</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Restrita a 25 km/h para atender aos regulamentos de limite de velocidade público, porém pode ser desbloqueada até 50 km/h para uso apenas em propriedades privadas.
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>luzes</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Frente: Farol LED</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>assistência de pedal</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Modo de assistência de pedal inteligente</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>faixa</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Puro Elétrico 45-55KM, Assistência 60-70KM</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>acelerador</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Acelerador giratório opcional disponível para uso privado. Não deve ser usado em vias públicas.
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>fiação</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Conectores e chicotes elétricos resistentes à água
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>portas usb</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Opcional, vendido separadamente. Consulte as opções de serviço da Ride Electric.
                            </C.HomeDetailsParagraph>
                        </C.HomeDetails>
                    </C.HomeDetailsArea>


                    <C.HomeDetailsArea>
                        <C.HomeDetails>
                            <C.HomeDetailsSumary>Componentes</C.HomeDetailsSumary>
                            <C.HomeDetailsParagraphLis>Pinças de freio</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Pinças de freio hidráulicas
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Alavancas de freio
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Alavancas de liga de alumínio
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Material da pastilha de freio
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>semimetálico
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Rotores de freio
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>180 mm dianteiro e traseiro
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Corrente</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>KMC Z7
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Crank Set
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>coroa 42T, comprimento da pedivela 170 mm, proteção da coroa em alumínio de dupla face
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Desviador
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano ALTUS Desviador
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Pára-lamas
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Cobertura total dianteira e traseira
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Quadro
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>em liga de alumínio 6061
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Engrenagem</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 1 x 7 velocidades
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Capacidade de inclinação
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>35°
                            </C.HomeDetailsParagraph>

                            <C.HomeDetailsParagraphLis>Peso
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>25kg sem bateria, 33kg com bateria
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Punhos
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Punhos ergonômicos de imitação de couro duráveis
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Guiador
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>em alumínio personalizado, 700 mm de largura, elevação de 4"
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Caixa de direção
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>semi-integrada, tubo de direção reto de 1-1/8"
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Kickstand
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Alumínio resistente com pé largo de plástico
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Pedais
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>eixo CrMo, plataforma em alumínio forjado com refletores, rosca padrão 9/16" x 20 TPI
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Racks
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Opcionais
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Aros Liga
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>de alumínio de parede dupla, 36 furos Largura do aro: 75 mm
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Selim
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Assento ergonômico com alça de elevação
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Espigão de selim
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>390 mm x 27,2 mm
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Grampo do espigão de selim
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Liberação rápida
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Shifter</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>de 7 velocidades com polegar</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Raios</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>em aço inoxidável calibre 12, preto</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Haste</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>50 mm + 30º (aumento de 15 mm)</C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Pneus</C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>20x4in CST</C.HomeDetailsParagraph>
                        </C.HomeDetails>
                    </C.HomeDetailsArea>
                </C.HomeDetailsArea>
            </C.HomeInfos >
        </>
    )
}