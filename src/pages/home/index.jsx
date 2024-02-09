
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Header } from '../../components/header';
import picture from '../../assets/bike.webp';
import imagesData from '../../data';
import staticDataImages from '../../statics';
import * as C from './style';
import { VideoDemo } from '../../videos';
import { ButtonSecundary } from '../../components/Buttons/buttonSecundary';
import { ButtonPrimary } from '../../components/Buttons/buttonPrimary';
import { Store } from '../store';

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

            <C.HomePreview>
                {staticDataImages.items2.map((item) => (
                    <C.HomePreviewControler key={item.id}>
                        <C.HomePreviewArea>
                            <C.HomePictureBox>
                                <C.HomePreviewImg src={item.image} alt='imagens' />
                                <C.HomeTitleArea>
                                    <C.HomeTitle>{item.name}</C.HomeTitle>
                                    <C.HomeDescription>{item.description}</C.HomeDescription>
                                    <Link to={`/products/${item.name}`} style={{textDecoration:"none"}}>{item.button && <ButtonSecundary props={item.button} />}</Link>
                                </C.HomeTitleArea>
                            </C.HomePictureBox>
                        </C.HomePreviewArea>
                    </C.HomePreviewControler>
                ))}
            </C.HomePreview>
            <h2 style={{ textAlign: "center", color: "#ddd", marginBottom: "2rem" }}>Videos Demonstração</h2>
            <VideoDemo />

            <ButtonPrimary handleNavigation={handleNavigation} />
            <Store />

        </>
    )
}
