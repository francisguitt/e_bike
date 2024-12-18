
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Header } from '../../components/header';
import imagesData from '../../data';
import staticDataImages from '../../statics';
import * as C from './style';
import { VideoDemo } from '../../videos';
import { ButtonSecundary } from '../../components/Buttons/buttonSecundary';
import { ButtonPrimary } from '../../components/Buttons/buttonPrimary';
import { ButtonDark } from '../../components/Buttons/buttonDark';
import { Store } from '../store';
import { FormInput } from '../../components/Form';
import picture from '../../assets/ebikebunner.webp';
import bike_v9 from '../../assets/v9.png';
import bike_h100 from '../../assets/h100.png';
import bike_bk500 from '../../assets/bk500.png';

import { phoneNumbers } from '../../utils/numbers';

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

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/Infos');
    }

    const phoneNumber = phoneNumbers.num;
    const handleWhatsAppClick = () => {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Olá vim pelo site , e quero mais infomações sobre as bikes')}`;

        window.open(whatsappLink, '_blank');
    };

    return (
        <>
            <Header />
            <C.HomeHedaer>
                <C.HomeHeaderPicture>
                    <C.HomeHedaerPictureImg src={picture} />
                </C.HomeHeaderPicture>
                <C.HomeHeaderTitle>
                    <C.HomeHeadeTitleText>
                        <span style={{ color: "#ffff00d1" }}>Liberte-se do Trânsito!</span> Transforme suas Jornadas com Nossa Bicicleta Elétrica de Alta Performance.
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
                            <C.HomeSliderBox key={item.id}>
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
            <C.HeadLine>
                <C.HomeHeadeTitleText>
                    Descubra a Liberdade da Mobilidade Sustentável. <span style={{ color: "#ffff00d1" }}>Mais Rápido, Mais Longe, Sem Esforço.</span>
                </C.HomeHeadeTitleText>
            </C.HeadLine>

            <C.HomePreview>
                {staticDataImages.items2.map((item) => (
                    <C.HomePreviewControler key={item.id}>
                        <C.HomePreviewArea>
                            <C.HomePictureBox>
                                <C.HomePreviewImg src={item.image} alt='imagem' />
                                <C.HomeTitleArea>
                                    <C.HomeTitle>{item.name}</C.HomeTitle>
                                    <C.HomeDescription>{item.description}</C.HomeDescription>

                                    <Link to={`/products/${item.name}`} style={{ textDecoration: "none" }}>{item.button && <ButtonSecundary name={item.button} />}</Link>
                                </C.HomeTitleArea>
                            </C.HomePictureBox>
                        </C.HomePreviewArea>
                    </C.HomePreviewControler>
                ))}
            </C.HomePreview>
            <C.HomePreview_2>
                
                <C.HomePreviewArea_2>
                    <C.HomePictureBox_2>
                        <C.HomePreviewImg src={bike_bk500} alt='imagens' />
                        <C.HomeTitleArea>
                            <Link onClick={handleWhatsAppClick} style={{ textDecoration: "none" }}><ButtonSecundary name="Comprar" /></Link>
                        </C.HomeTitleArea>
                    </C.HomePictureBox_2>
                    <C.HomePictureBox_2>
                        <C.HomePreviewImg src={bike_v9} alt='imagens' />
                        <C.HomeTitleArea>
                            <Link onClick={handleWhatsAppClick} style={{ textDecoration: "none" }}><ButtonSecundary name="Comprar" /></Link>
                        </C.HomeTitleArea>
                    </C.HomePictureBox_2>

                    <C.HomePictureBox_2>
                        <C.HomePreviewImg src={bike_h100} alt='imagens' />
                        <C.HomeTitleArea>
                            <Link onClick={handleWhatsAppClick} style={{ textDecoration: "none" }}><ButtonSecundary name="Comprar" /></Link>
                        </C.HomeTitleArea>
                    </C.HomePictureBox_2>
                </C.HomePreviewArea_2>
            </C.HomePreview_2 >
            <h2 style={{ textAlign: "center", color: "#ddd", marginBottom: "2rem" }}>Videos Demonstração</h2>
            <VideoDemo />

            <ButtonPrimary handleNavigation={handleNavigation} />
            <Store />
            <C.List>
                <C.ListItem><C.Icon>🍃</C.Icon>Sustentável<br /><C.ListItemText> Reduza sua pegada de carbono enquanto se desloca</C.ListItemText></C.ListItem>
                <C.ListItem><C.Icon>🔋</C.Icon>Autonomia<br /> <C.ListItemText>Mais quilômetros, menos recargas.</C.ListItemText></C.ListItem>
                <C.ListItem><C.Icon>⚙️</C.Icon>Manutenção<br /><C.ListItemText> Descomplicada Design robusto e fácil de manter.</C.ListItemText></C.ListItem>
                <C.ListItem><C.Icon>🔌</C.Icon>Poupe Energia<br /> <C.ListItemText>Pedale com facilidade, sem esforço desnecessário.</C.ListItemText></C.ListItem>
                <C.ListItem><C.Icon>☘️</C.Icon>Eco-Friendly<br /><C.ListItemText>Faça parte da mudança para um planeta mais verde.</C.ListItemText></C.ListItem>
                <C.ListItem><C.Icon>🛤️</C.Icon>Pronta para Desafios<br /><C.ListItemText>Encare qualquer clima com nossa resistência superior.</C.ListItemText></C.ListItem>
                <ButtonDark handleClick={handleWhatsAppClick} name="Fale Conosco" />
            </C.List>

            <FormInput/>
        </>
    )
}
