import React from "react";
import {Link} from 'react-router-dom';
import './Header.css'
import {AiOutlineHome} from 'react-icons/ai';
import {TiTick} from 'react-icons/ti';
import {FiSearch,FiMenu} from 'react-icons/fi';
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../redux/AuthAction";



function Header(){
    const auth = useSelector((data)=>{return data.auth})
   const dispatch= useDispatch();
    return(
        <>
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
        <div className="search">
        <Link to="/search"><img src="https://www.aha.video/search-icon.704c679b82e10dd8379c.svg" alt="search"  className="searchIcon" /></Link></div>
        <img src="https://www.aha.video/language-icon.ef88ebcc6b1bcda97fc4.svg" style={{marginLeft:"2%"}} width={"2.5%"} alt="lang"  className="langugageIcon"/>
       
       
        <Link to="/subscribe"><button  style={{marginLeft: "2em"}} className="subscribe-btn">Subscribe Now</button></Link>
            <div  className="signin"><img src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" alt="user" /> {!auth ?<Link to ={"/login"} style={{textDecoration:"none", color: "white"}}> <p  style={{fontSize:"21px", marginTop:"7px"}}>Sign In</p> </Link>: <p onClick={()=>{dispatch(logout())}} style={{color:"white", fontSize:"21px", marginTop:"7px"}}>Logout</p>}
                
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
    <Link to="/" style={{textDecoration:"none", color: "white"}}> All</Link>
        <Link to="/movies" style={{textDecoration:"none", color: "white"}}>Movies</Link>
        <Link to="/show" style={{textDecoration:"none", color: "white"}}>Show</Link>
        <Link to="/kids" style={{textDecoration:"none", color: "white"}}>Kids</Link>
    </div>
    </div>
     
     {/* Bottom Navbar */}
     <div className="bottom-nav">
        <div className="bottom-nav-items" >
        <Link to= '/' style={{textDecoration:"none"}}><div className="bottom-icons" >  <AiOutlineHome style={{color:"#e66625"}} /> Home</div></Link> 
         <Link to='/myaha' style={{textDecoration:"none", color: "rgb(129, 125, 125)"}}><div className="bottom-icons"> <TiTick/> My aha</div></Link>
         <Link to='/search' style={{textDecoration:"none", color: "rgb(129, 125, 125)"}}><div className="bottom-icons">  <FiSearch/> Search</div></Link>
         <Link to ='/menu' style={{textDecoration:"none", color: "rgb(129, 125, 125)"}}><div className="bottom-icons"> <FiMenu/> Menu</div></Link>
        </div>
     </div>

        </>

        
    )
}

export default Header;