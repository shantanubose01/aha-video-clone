import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Header.css'

function Header(){
    const[sign, setSign]= useState(false);
    return(
        <>
        <div className="header-container">
        <div className="left">
        <Link to="/"><img className="logo" src="https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png" alt="logo" /></Link>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/show">Show</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/myaha">My aha</Link>
        </div>
        <div className="right">
        <div className="search"><input type="text"/>
        <img src="https://www.aha.video/search-icon.704c679b82e10dd8379c.svg" alt="search"  className="searchIcon"/></div>
        <img src="https://www.aha.video/language-icon.ef88ebcc6b1bcda97fc4.svg" style={{marginLeft:"2%"}} width={"2.5%"} alt="lang"  className="langugageIcon"/>
       
       
        <Link to="/subscribe"><button  style={{marginLeft: "2em"}} className="subscribe-btn">Subscribe Now</button></Link>
            <div style={{marginLeft: "2em"}} className="signin"><img src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" alt="user" /> {!sign ?<Link to ={"/login"}> <p  >Sign In</p> </Link>: <p  style={{color:"white"}}>Logout</p>}
                
                </div>
        </div>
        
    </div>
    
        </>
    )
}

export default Header;