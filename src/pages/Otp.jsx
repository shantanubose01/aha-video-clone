import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Otp.css';
function Otp(){

const[input,setInput]= useState("");
const verifyOTP=(e)=>{
    e.preventDefault();
    const userOTP= JSON.parse(localStorage.getItem("otp"));
    if(userOTP===input){
        alert("OTP verified successfully!")
    }
}
    return(
        <div>
            <div className="otp-logo"></div>
            <div className="otpCard">
            <div className="otpCardCont">
          <Link to={"/login"}><div className="go-btn" >
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none" className="ng-star-inserted"><path d="M8.37377 1.70711C8.7643 1.31658 8.7643 0.683418 8.37377 0.292893C7.98325 -0.0976311 7.35008 -0.0976311 6.95956 0.292893L0.292893 6.95956C-0.097631 7.35009 -0.097631 7.98325 0.292893 8.37377L6.95956 15.0404C7.35008 15.431 7.98325 15.431 8.37377 15.0404C8.7643 14.6499 8.7643 14.0168 8.37377 13.6262L2.41421 7.66667L8.37377 1.70711Z" fill="#ECECEC"></path></svg>
          </div></Link>
          <div className="otp-verify-text">
                <p>Verify < br/> your otp <span className="otp-text-dot">.</span></p>    
            </div>
            <div className="otp-send-text">
                OTP was sent to
            </div>
            <div className="otp-send-container">
                <div className="mobile-text">+91 9891581599</div>
                <div className="change-btn">Change</div>
            </div>
            <form onSubmit={verifyOTP} >
             <input className="otp-input-cont" type="password" onChange={(e)=>{setInput(e.target.value)}}/>
             {input.length>3 ? <input className="otp-submit" type="submit" value="Verify OTP"/> : null}
            </form>
            <div className="otp-resend">
                Resend OTP
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg"><path  d="M0.719671 10.7197C0.426777 11.0126 0.426777 11.4874 0.719671 11.7803C1.01256 12.0732 1.48744 12.0732 1.78033 11.7803L6.78033 6.78033C7.07322 6.48744 7.07322 6.01256 6.78033 5.71967L1.78033 0.719669C1.48744 0.426775 1.01257 0.426775 0.719672 0.719669C0.426778 1.01256 0.426778 1.48744 0.719672 1.78033L5.18934 6.25L0.719671 10.7197Z" fill="#ECECEC"></path></svg>
            </div>
            <div className="terms-service">By creating an account you adhere to the <br /> <span>Terms of Service </span>
             and <span> Privacy Policy.</span> </div>
            </div>
          </div>
        </div>
    )
}
export default Otp;