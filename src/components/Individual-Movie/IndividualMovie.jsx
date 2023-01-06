import React from 'react';
import "../Individual-Movie/individualMovie.css"

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

        </div>
        <div className='parent-3'>
            <h2>Similar to this</h2>
            
        </div>
        </div>
    );
}

export default IndividualMovie;