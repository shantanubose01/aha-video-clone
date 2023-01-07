import React from 'react';
import "../Individual-Show/IndividualShow.css"
import { useState } from 'react';
import Similar from '../Similar/Similar';
import Popular from '../Popular/Popular';

function IndividualShow(props) {
    const [cast,setCast] = useState(false);
    const [detail,setDetail] = useState(false);
    const [epi,setEpi] = useState(true);

    const ShowEpisode = ()=>{
        setCast(false);
        setDetail(false);
        setEpi(true);
        document.getElementById("cast-btn").classList.remove("active");
        document.getElementById("detail-btn").classList.remove("active");
        document.getElementById("epi-btn").classList.add("active");
    }

    const ShowCast = (e)=>{
       e.preventDefault();
       setCast(true);
       setEpi(false);
       setDetail(false);
       document.getElementById("detail-btn").classList.remove("active");
       document.getElementById("epi-btn").classList.remove("active");
        document.getElementById("cast-btn").classList.add("active");
    }
    const ShowDetails = ()=>{
        setCast(false);
        setDetail(true);
        setEpi(false);
        document.getElementById("cast-btn").classList.remove("active");
        document.getElementById("epi-btn").classList.remove("active");
        document.getElementById("detail-btn").classList.add("active");
    }


    return (
        <div className='main'>
        <div className='parent--1'>
            <div className='child--1'>
                <div className='cs'></div>
                <img src="https://image-resizer-cloud-api.akamaized.net/image/4D314A9F-A84F-4AFA-986A-EEFAACD370C6/0-3x1.jpg?width=1920" height="430px" width="100%" alt="Masooda"/>
                <div className='detail'>
                    <p style={{border:"1.5px solid grey",display:"inline",fontSize:"10px",padding:"3px 10px",borderRadius:"5px"}}><img src="https://www.clker.com/cliparts/7/e/E/x/r/Z/orange-check-mark-th.png" width="12px" height="8px" alt="check"/> Premium</p>
                    <div style={{display:"inline",padding:"7px"}}></div>
                    <p style={{border:"1.5px solid grey",display:"inline",fontSize:"10px",padding:"3px 6px",borderRadius:"5px"}}>U/A</p>
                    <div style={{display:"inline",padding:"7px"}}></div>
                    <p style={{border:"1.5px solid grey",display:"inline",fontSize:"10px",padding:"3px 6px",borderRadius:"5px"}}>7+</p>
                    <h2 style={{color:"grey",margin:"9px 0 -4px 0"}}>Unstoppable</h2>
                    <h1 style={{margin:"5px 0 -12px 0"}}>The Bahubali Episode - <br></br>Part 2</h1>
                    <p style={{color:"grey",fontSize:"14px",fontWeight:"500"}}>2022 • 54min • 2 Seasons • Talk Show <br></br>Humorous • Exciting</p>
                    <p style={{fontSize:"14px",fontWeight:"400"}}>Lastly, let's ask and find out what remains about our DARLING,<br></br>Prabhas all this time - The Unstoppable Conclusion .</p>
                    <button className='btn'>Subscribe Now</button><br></br>
                    <img src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Share-512.png" alt="share" className='share-'/>
                    <p style={{fontSize:"11px"}}>Share</p>
                </div>
            </div>
        </div>



        <div className='parent--2'>
            <div className='mid-child'>
                <p className='link active' id="epi-btn" onClick={ShowEpisode}>Episodes</p>
                <p className='link' id="cast-btn" onClick={ShowCast}>Cast</p>
                <p className='link' id="detail-btn" onClick={ShowDetails}>Details</p>
            </div>
            {
                epi && <div></div>
            }
            {
                cast && (<div className="cast">
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/nandamuri-balakrishna/0-1x1.jpg?width=142" alt="cast" width="70%"/>
                    <p>Nandamuri Bala...</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/prabhas/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Prabhas</p>
                </div>
                <div>
                    <img src="https://image-resizer-cloud-api.akamaized.net/image/gopichand/0-1x1.jpg?width=142" alt="cast"/>
                    <p>Gopichand</p>
                </div>
            </div>)
            }
            {
                detail && (<div className="det">
                <div style={{color:"grey",marginRight:"5%"}}>
                    <li>Director</li>
                    <li>Studio</li>
                </div>
                <div>
                    <li>Ashim Sen</li>
                    <li>N/A</li>
                </div>
            </div>)
            }  
        </div>

        <Similar />
        <Popular />
        
        </div>
    );
}

export default IndividualShow;