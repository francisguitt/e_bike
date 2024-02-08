

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import * as C from './styles';
import dataVideos from './videoData.json';

export const VideoDemo = () => {
  return (
    <C.VideoSlider>
      <C.HomeSliderImage>
        <Swiper
          spaceBetween={4}
          slidesPerView={1}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dataVideos.data_videos.map((item) => (
            <SwiperSlide key={item.id}>
              <C.VideoArea>
                <C.StyledVideo
                  src={item.src} 
                  title={item.title}
                  allow={item.allow}
                  allowFullScreen={item.allowFullScreen}
                ></C.StyledVideo>
              </C.VideoArea>
            </SwiperSlide>
          ))}
        </Swiper>
      </C.HomeSliderImage>
    </C.VideoSlider>
  );
};


