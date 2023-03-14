import React from 'react';
import "../Individual-Show/IndividualShow.css"
import { useState } from 'react';
import Similar from '../Similar/Similar';
import Popular from '../Popular/Popular';
import Header from '../Header';
import Footer from '../Footer';

function IndividualShow(props) {
    const [cast,setCast] = useState(false);
    const [detail,setDetail] = useState(false);
    const [epi,setEpi] = useState(true);

    const openEpisode = ()=>{
        setCast(false);
        setDetail(false);
        setEpi(true);
        document.getElementById("cast-btun").classList.remove("active");
        document.getElementById("detail-btun").classList.remove("active");
        document.getElementById("epi-btun").classList.add("active");
    }

    const openCast = (e)=>{
       e.preventDefault();
       setCast(true);
       setEpi(false);
       setDetail(false);
       document.getElementById("detail-btun").classList.remove("active");
       document.getElementById("epi-btun").classList.remove("active");
        document.getElementById("cast-btun").classList.add("active");
    }
    const openDetails = ()=>{
        setCast(false);
        setDetail(true);
        setEpi(false);
        document.getElementById("cast-btun").classList.remove("active");
        document.getElementById("epi-btun").classList.remove("active");
        document.getElementById("detail-btun").classList.add("active");
    }


    return (
        <>
        <Header/>
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
                    <p style={{color:"grey",fontSize:"14px",fontWeight:"500",marginTop:"10px"}}>2022 • 54min • 2 Seasons • Talk Show <br></br>Humorous • Exciting</p>
                    <p style={{fontSize:"14px",fontWeight:"400"}}>Lastly, let's ask and find out what remains about our DARLING,<br></br>Prabhas all this time - The Unstoppable Conclusion .</p>
                    <button className='btn'>Subscribe Now</button><br></br>
                    {/* <img src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Share-512.png" alt="share" className='share-'/>
                    <p style={{fontSize:"11px"}}>Share</p> */}
                </div>
            </div>
        </div>



        <div className='parent--2'>
            <div className='mid-child'>
                <p className='link active' id="epi-btun" onClick={openEpisode}>Episodes</p>
                <p className='link' id="cast-btun" onClick={openCast}>Cast</p>
                <p className='link' id="detail-btun" onClick={openDetails}>Details</p>
            </div>
            {
                epi && <div className='episodes'>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/E61A5134-85D3-448B-A0D2-A9351E7A29F0/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>1. Unstoppable 2 Episode 1</p>
                            <p className='mid'>Episode 1 | 1hr 19min</p>
                            <p className='bottom'>AP's former chief minister Sri Nara Chandrababu Naidu and his son Nara Lokesh attended as guests.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/7B660DC7-28A6-45DF-8511-46002B1FE2EF/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>2. Unstoppable 2 Episode 2</p>
                            <p className='mid'>Episode 2 | 1hr 17min</p>
                            <p className='bottom'>God of Masses - Nandamuri Balakrishna garu meets the Young & Energetic Guests, Mass ka Dass <br></br>Vishwak Sen & Mass ka Boss Siddu Jonnalagadda in this Blockbuster Entertainer Episode to talk their<br></br> hearts out.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/AF11E02F-1F87-4FCD-8D70-17829ADF92E6/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>3. Unstoppable 2 Episode 3</p>
                            <p className='mid'>Episode 3 | 1hr 4min</p>
                            <p className='bottom'>The most eligible bachelors of Tollywood made some noise with NBK and spilled some secrets and <br></br>talked about their love/life/marriage .</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/BF9B7EFB-1336-457A-AAEB-23C3C5E76E3B/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>4. Unstoppable 2 Episode 4</p>
                            <p className='mid'>Episode 4 | 1hr 7min</p>
                            <p className='bottom'>What started out as 3 friends enjoying their life at Nizam college turned out to be a fun-filled episode.<br></br>As they take you along the memory lane with exciting conversations about their youth and political<br></br>experiences, this episode is definitely a fascinating watch.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/4A04CD85-8FD6-4E15-A9F4-740F75B8967F/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>5. Unstoppable 2 Episode 5</p>
                            <p className='mid'>Episode 5 | 1hr 13min</p>
                            <p className='bottom'>Celebrating NTR's 100th birthday and 90 years of Telugu Cinema with fun bantering conversations with<br></br> the men behind the magic!</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/B99C8C69-FB70-4C17-B17A-DEEE5C0FF82E/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>6. Unstoppable 2 Episode 6</p>
                            <p className='mid'>Episode 6 | 1hr 7min</p>
                            <p className='bottom'>'Naari Naari Naduma Nandamuri' - Watch and Enjoy Balayya's FUN-tastic moments with the Beauty <br></br>Queens.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/0E441AF9-EB39-4A16-B48B-61464EB72E97/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>7. The Bahubali Episode - Part 1</p>
                            <p className='mid'>Episode 7 | 54min</p>
                            <p className='bottom'>The time has come for you to find out everything you wanted to know about our DARLING, Prabhas<br></br> all this time. And having Bahubali meet Baala Nandamuri makes the show an unstoppable allari.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://image-resizer-cloud-api.akamaized.net/image/4D314A9F-A84F-4AFA-986A-EEFAACD370C6/0-16x9.jpg?width=240" alt="episode" width="220px" height="130px"/>
                        <div>
                            <p className='head'>8. The Bahubali Episode - Part 2</p>
                            <p className='mid'>Episode 8 | 54min</p>
                            <p className='bottom'>Lastly, let's ask and find out what remains about our DARLING, Prabhas all this time - The Unstoppable Conclusion .</p>
                        </div>
                    </div>
                </div>
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
        <Footer/>
        </>
    );
}

export default IndividualShow;