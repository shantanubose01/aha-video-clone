import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const tmdbID = localStorage.getItem("tndbID") || "129";
const contentType = localStorage.getItem("contentType") || "movie";
const Player = (props) => {
    let x = window.innerHeight;
    const[ytLink, setYTLink] = useState("");
    let url = `https://api.themoviedb.org/3/${contentType}/${tmdbID}/videos?api_key=5b2334617cd63be51871f0ff36fb3b3c&language=en-US`
    // console.log(url);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data.results.length>0){
                setYTLink(data.results[0].key);
            }
            else setYTLink("u4N7MbMVIYE");
            
        })
    }, []);
    // console.log(x);
  return (
    <div>
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${ytLink}`}
        style={{backgroundColor:"black"}}
        height={x}
        width="100%"
        controls={true}
        playing={true}
        light={true}
        playIcon=<img src='https://www.aha.video/play.bfd6bfa5f9cb261c361e.svg'/>
      />

      
    </div>
  );
};

export default Player;
