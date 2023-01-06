import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../Similar/similar.css"

function Similar() {
    return (
        <div className='parent-3'>
            <h2>Similar to this</h2>
            <div className='similar-movie'>
            <Swiper
            className='similar'
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={5.7}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266" alt="movie-1"/>
                <p>Reyi ki veyyi kallu</p>
            </div>
      </SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/0820C3A4-31B0-42B8-AF2C-9AC9F12A4812/0-16x9.jpg?width=266" alt="movie-1"/>
                <p>Lissa</p>
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/76567934-F73D-47EF-B35F-DF9F1DE76979/0-16x9.jpg?width=266" alt="movie-1"/>
                <p>Tharuvatha Evaru</p>
            </div>
      </SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/3883DA5A-D1D9-4497-B382-64B02B5A98EA/0-16x9.jpg?width=266" alt="movie-1"/>
                <p>Cold Case</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/8C8B2DC9-8C2D-4AC0-90F9-745014E40811/0-16x9.jpg?width=266" alt="movie-1"/>
                <p>Shikaaru</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/83C8C9E9-AA77-425B-94F9-371D53DEE011/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Odela Railway Station</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/E00F6212-5C42-4EB1-9E21-E14F6AB35663/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Manmatha Leela</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/F1ED6BFB-7FC6-42AA-89A0-2504F9B62910/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Alluri</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/99DC572C-B208-4047-8925-DD5B6E48D667/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Nenu meeku baaga kav...</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/43F4F2F8-ACC6-42AD-A904-93646DE4EC79/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Kapata Nataka Sutra Dhari</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/98EC8F24-AC1B-4EB7-9712-83A364A383EC/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Kavisamrat Viswanadha</p>
            </div></SwiperSlide>
      <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/256D2180-CB22-473A-BC33-41BA0A57EB62/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Swathi Muthyam</p>
            </div></SwiperSlide>
            <SwiperSlide><div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/88F1A938-A11D-4B8E-94E4-67C5F4B42AE0/0-16x9.jpg?width=266" alt="similar-movie"/>
                <p>Andaru baagundali Andulo</p>
            </div> </SwiperSlide>
      ...
    </Swiper>
            </div>
        </div>
    );
}

export default Similar;