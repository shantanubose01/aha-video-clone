import React from 'react';
import "../Individual-Movie/individualMovie.css"
import { useState } from 'react';
import Similar from '../Similar/Similar';
import Popular from '../Popular/Popular';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

function IndividualMovie(props) {
    const [cast,setCast] = useState(true);
    const [detail,setDetail] = useState(false);
     const navigate = useNavigate() ;

    const ShowCast = (e)=>{
       e.preventDefault();
       setCast(true);
       setDetail(false);
       document.getElementById("detail-btn").classList.remove("active-link");
        document.getElementById("cast-btn").classList.add("active-link");
    }
    const ShowDetails = ()=>{
        setCast(false);
        setDetail(true);
        document.getElementById("cast-btn").classList.remove("active-link");
        document.getElementById("detail-btn").classList.add("active-link");
    }
    const handleClick = ()=>{
      navigate("/player")
    }


    return (
        <>
        <Header/>
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
                    <p style={{color:"grey",fontSize:"14px",fontWeight:"500", marginTop:"15px"}}>2022 . 2hr 40min . Horror Thriller<br></br>
                        Mystery . Suspenseful
                    </p>
                    <p style={{fontSize:"13px",fontWeight:"500"}}>Neelam a single mother with the help of meek and coward neighbour Gopi struggles <br></br>to save her possessed daughter Nazia from the clutches of an evil force.</p>
                    <button className='btn-1' onClick={handleClick}>Play Trailor</button>
                    <div style={{display:"inline-block",padding:"10px"}}></div>
                    <button className='btn-2'>Subscribe Now</button><br></br>
                    {/* <img src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Share-512.png" alt="share" className='share'/>
                    <p style={{fontSize:"11px"}}>Share</p> */}
                </div>
            </div>
        </div>

        {/* <------------------------------------------------------------> */}


        <div className='parent-2'>
            <div className='middle-child'>
                <p className='tab-link active-link' id="cast-btn" onClick={ShowCast}>Cast</p>
                <p className='tab-link' id="detail-btn" onClick={ShowDetails}>Details</p>
            </div>
            {
                cast && (<div className="content cast">
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/sangeetha/0-1x1.jpg?width=142" alt="cast" width="70%"/>
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
            </div>)
            }
            {
                detail && (<div className="content active-tab">
                <div style={{color:"grey",marginRight:"5%"}}>
                    <li>Director</li>
                    <li>Studio</li>
                </div>
                <div>
                    <li>Sai Kiran</li>
                    <li>Swadharm</li>
                    <li>Entertainment</li>
                    <li>Private Limited</li>
                </div>
            </div>)
            }  
        </div>

        <Similar />
        <Popular />
        
        </div>
        </>
    );
}

export default IndividualMovie;