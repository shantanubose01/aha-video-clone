import React from 'react';
import "../Individual-Movie/individualMovie.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/swiper.scss';

function IndividualMovie(props) {
    return (
        <div className='boss'>
        <div className='parent'>
            <div className='child-1'>
                <div className='css'></div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/C6D49DC4-C4D5-495B-86C5-AA6EC41CE315/0-3x1.jpg?width=1920" height="430px" width="100%" alt="Masooda"/>
                <div className='details'>
                    <p style={{border:"1.5px solid grey",display:"inline",fontSize:"10px",padding:"3px 10px",borderRadius:"5px"}}><img src="https://www.clker.com/cliparts/7/e/E/x/r/Z/orange-check-mark-th.png" width="12px" height="8px" alt="check"/> Premium</p>
                    <div style={{display:"inline",padding:"7px"}}></div>
                    <p style={{border:"1.5px solid grey",display:"inline",fontSize:"10px",padding:"3px 10px",borderRadius:"5px"}}>A</p>
                    <h1 style={{margin:"5px 0 -10px 0"}}>Masooda</h1>
                    <p style={{color:"grey",fontSize:"14px",fontWeight:"500"}}>2022 . 2hr 40min . Horror Thriller<br></br>
                        Mystery . Suspenseful
                    </p>
                    <p style={{fontSize:"13px",fontWeight:"500"}}>Neelam a single mother with the help of meek and coward neighbour Gopi struggles <br></br>to save her possessed daughter Nazia from the clutches of an evil force.</p>
                    <button className='btn-1'>Play Trailor</button>
                    <div style={{display:"inline-block",padding:"10px"}}></div>
                    <button className='btn-2'>Subscribe Now</button><br></br>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.fwVztmy6PdSo2AvakioFfAAAAA?pid=ImgDet&rs=1" alt="share" className='share'/>
                    <p style={{fontSize:"11px"}}>Share</p>
                </div>
            </div>
        </div>
        <div className='parent-2'>
            <div className='middle-child'>
                <p className='tab-link active'>Cast</p>
                <p className='tab-link'>Details</p>
            </div>
            <div className="content">
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/sangeetha/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Sangeetha</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/thiruveer/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Thiruveer</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/mouryani/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Mouryani</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/pavithra-lokesh/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Pavithra Lokesh</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/manju-bhargavi/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Manju Bhargavi</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/tanikella-bharani/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Tanikella Bharani</p>
                </div>
            </div>
             
        </div>
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

        </div>
    );
}

export default IndividualMovie;