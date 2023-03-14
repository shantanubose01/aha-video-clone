import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TrendingSearches from "./TrendingSearches";
import Results from "./Results";
import style from "./Search.module.css";
import {Link} from 'react-router-dom';
import '../../components/Header.css'

const Search = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchparams.get("query") || "";

  useEffect(() => {
    const getData = setTimeout(async () => {
      if(query) try  {
        let res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=5b2334617cd63be51871f0ff36fb3b3c&query=${query}`
        );
        let { results } = await res.json();
        // console.log(results);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [searchparams]);

  const handleChange = (e) => {
    let value = e.target.value;
    setsearchparams({ query: value });
  };
  return (
    <div>
     {/* <h1 className={style.h1}>Search</h1>
      <input type="text" value={query} onChange={handleChange} style={{color:"black"}}/> */}
       <div className="header-container">
        <div className="left">
        <Link to="/"><img className="logo" src="https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png" alt="logo" /></Link>
        <Link to="/" style={{textDecoration:"none", color: "white"}}>Home</Link>
        <Link to="/movies" style={{textDecoration:"none", color: "white"}}>Movies</Link>
        <Link to="/show" style={{textDecoration:"none", color: "white"}}>Show</Link>
        <Link to="/kids" style={{textDecoration:"none", color: "white"}}>Kids</Link>
        <Link to="/myaha" style={{textDecoration:"none", color: "white"}}>My aha</Link>
        </div>
        <div className="right">
        <div className="search"><input type="text" className="searchinput"  value={query} onChange={handleChange} />
        <Link to="/search"><img src="https://www.aha.video/search-icon.704c679b82e10dd8379c.svg" alt="search"  className="searchIcon" /></Link></div>
        <img src="https://www.aha.video/language-icon.ef88ebcc6b1bcda97fc4.svg" style={{marginLeft:"-8px"}} width={"2.5%"} alt="lang"  className="langugageIcon"/>
       
       
        <Link to="/subscribe"><button  style={{marginLeft: "-10px",padding:"10px"}} className="subscribe-btn">Subscribe Now</button></Link>
            <div  className="signin"><img src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" alt="user" /> <p style={{marginTop:"8px"}}>Log Out</p>
                
                </div>
        </div>
        
    </div>
      <div style={{padding:"100px"}}>
        {movies?.map((e, i) => {
          let url;
          if (e.backdrop_path)
            url = `https://image.tmdb.org/t/p/w1280${e.backdrop_path}`;
          else if (e.poster_path)
            url = `https://image.tmdb.org/t/p/w1280${e.poster_path}`;
          return (
            <Results 
              query={query}
              data = {movies}
            />
          );
        })}
      </div>
      <TrendingSearches />
    </div>
  );
};

export default Search;
