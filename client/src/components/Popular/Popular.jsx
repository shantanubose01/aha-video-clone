import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../Popular/popular.css"

function Popular(props) {
    return (
        <div className='parent-4'>
        <h2>Popular Shows</h2>
        <div className='popular-movie'>
        <Swiper
        className='popular'
  modules={[Navigation, A11y]}
  spaceBetween={10}
  slidesPerView={5.7}
  navigation
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266" alt="movie-1"/>
            <p>Unstoppable</p>
        </div>
  </SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266" alt="movie-1"/>
            <p>Sam Jam</p>
        </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=266" alt="movie-1"/>
            <p>3 Roses</p>
        </div>
  </SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-16x9.jpg?width=266" alt="movie-1"/>
            <p>Sin</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-16x9.jpg?width=266" alt="movie-1"/>
            <p>Locked</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>Telugu Indian Idol</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/CF86398B-F897-4DEA-B067-2AEC473A7309/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>11th Hour</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A5195311-35E3-46F0-BA14-58F1B96AD6ED/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>No.1 Yaari with Raana</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/85D56847-BEB7-4C31-8F03-72FB55EE3FA6/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>Kudi Yedamaithe</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/836A0A87-656C-46FE-BBD1-F12BA6088F68/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>SARKAAR</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/7C1146D3-79CA-47FF-AB88-B9721D445531/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>The Baker & The Beauty</p>
        </div></SwiperSlide>
  <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/B890CBBD-4869-4D11-8740-AFD01DF72377/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>Agent Anand Santosh</p>
        </div></SwiperSlide>
        <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/73842883-4C30-43B4-AC0D-232A4496E185/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>In The Name of GOD</p>
        </div> </SwiperSlide>
        <SwiperSlide><div>
            <img src="https://image-resizer-cloud-api.akamaized.net/image/ECE0631E-D9E1-45ED-8631-C803D2E80424/0-16x9.jpg?width=266" alt="similar-movie"/>
            <p>Anya's Tutorial</p>
        </div> </SwiperSlide>
  ...
</Swiper>
        </div>
    </div>
    );
}

export default Popular;