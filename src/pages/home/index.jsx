
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Header } from '../../components/header';
import picture from '../../assets/bike.webp';
import imagesData from '../../data';
import staticDataImages from '../../statics';
import * as C from './style';

export const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    return (
        <>
            <Header />
            <C.HomeHedaer>
                <C.HomeHeaderPicture>
                    <C.HomeHedaerPictureImg src={picture} />
                </C.HomeHeaderPicture>
                <C.HomeHeaderTitle>
                    <C.HomeHeadeTitleText>
                        A melhor E-bike com pneus grossos. Pois não importa como você ande
                    </C.HomeHeadeTitleText>
                </C.HomeHeaderTitle>
            </C.HomeHedaer>

            {isMobile ? (
                <C.HomeSlider>
                    <C.HomeSliderImage>
                        <Swiper
                            spaceBetween={4}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {imagesData.items.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <C.HomeSliderBox>
                                        <C.HomeSliderPreviewImg src={item.image} alt="imagens dos items" />
                                        <C.HomeSliderTitleArea>
                                            <C.HomeSliderTitle>{item.name}</C.HomeSliderTitle>
                                            <C.HomeSliderDescription>{item.description}</C.HomeSliderDescription>
                                        </C.HomeSliderTitleArea>
                                    </C.HomeSliderBox>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </C.HomeSliderImage>
                </C.HomeSlider >
            ) : (
                <C.HomeSlider>
                    <C.HomeSliderImage>
                        {imagesData.items.map((item) => (
                            <C.HomeSliderBox>
                                <C.HomeSliderPreviewImg src={item.image} alt="imagens dos items" />
                                <C.HomeSliderTitleArea>
                                    <C.HomeSliderTitle>{item.name}</C.HomeSliderTitle>
                                    <C.HomeSliderDescription>{item.description}</C.HomeSliderDescription>
                                </C.HomeSliderTitleArea>
                            </C.HomeSliderBox>
                        ))}
                    </C.HomeSliderImage>
                </C.HomeSlider>
            )}

            <C.HomePreview>
                {staticDataImages.items2.map((item) => (
                    <Link style={{ textDecoration: "none" }}>
                        <C.HomePreviewArea key={item.id}>
                            <C.HomePicture>
                                <C.HomePictureBox>
                                    <C.HomePreviewImg src={item.image} alt='imagens' />
                                    <C.HomeTitleArea>
                                        <C.HomeTitle>{item.name}</C.HomeTitle>
                                        <C.HomeDescription>{item.description}</C.HomeDescription>
                                    </C.HomeTitleArea>
                                </C.HomePictureBox>
                            </C.HomePicture>
                        </C.HomePreviewArea>
                    </Link>
                ))}
            </C.HomePreview>



            <C.HomeInfos>
                <C.HomeInfosTitle>
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
                            <C.HomeDetailsSumary>componentes</C.HomeDetailsSumary>
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
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                            <C.HomeDetailsParagraphLis>Roda livre
                            </C.HomeDetailsParagraphLis>
                            <C.HomeDetailsParagraph>Shimano 7 marchas e desviador ALTUS
                            </C.HomeDetailsParagraph>
                        </C.HomeDetails>
                    </C.HomeDetailsArea>
                </C.HomeDetailsArea>
            </C.HomeInfos >
        </>
    )
}
