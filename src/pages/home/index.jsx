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
                    <Link style={{textDecoration:"none"}}>
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
        </>
    )
}
