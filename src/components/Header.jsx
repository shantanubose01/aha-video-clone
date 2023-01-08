import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Header.css'
import {AiOutlineHome} from 'react-icons/ai';
import {TiTick} from 'react-icons/ti';
import {FiSearch,FiMenu} from 'react-icons/fi';


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


    {/* Another Navbar
    {/* <div> Hello</div>  */}
     <div className="small-screen-nav">
    <div className="another-nav">
        <div style={{width:"20px"}}></div>
        <div className="nav-logo"></div>
        <div className="lang-icon"></div>
    </div>
    <div className="category-cont">
    <Link to="/"> All</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/show">Show</Link>
        <Link to="/kids">Kids</Link>
    </div>
    </div>
     
     {/* Bottom Navbar */}
     <div className="bottom-nav">
        <div className="bottom-nav-items" >
        <Link to= '/'><div className="bottom-icons" style={{color:"#fff"}}>  <AiOutlineHome style={{color:"#e66625"}} /> Home</div></Link> 
         <Link to='/myaha'><div className="bottom-icons"> <TiTick/> My aha</div></Link>
         <Link to='/search'><div className="bottom-icons">  <FiSearch/> Search</div></Link>
         <Link to ='/menu'><div className="bottom-icons"> <FiMenu/> Menu</div></Link>
        </div>
     </div>

        </>

        
    )
}

export default Header;