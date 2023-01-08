import { CollapsedComp } from "./CollapsedComp";
import { CollapsedCompMain } from "./CollapsedCompMain";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Payments.css" ;

export function Payment(){
   const [price,setPrice] = useState(699) ;
   const [coupon,setCoupon] = useState('') ;
   const navigate = useNavigate();
   const couponChange = (e)=>{
      setCoupon(e.target.value) ;
   }
   const applyCoupon = ()=>{
      if(coupon==='masai30'){
         alert('30% discount applied!') ;
         setPrice(489) ;
      }
      else{
         alert('Enter Valid Coupon Code!')
      }
   }
   const finalPay = ()=>{
      let OTP = 1234;
      let person = prompt("Please Enter OTP", "example: 6728");
      if (person != null && person==OTP) {
       alert('Payment Successfull!')
      navigate("/");
      }else{
          alert("wrong otp!");
      }
   }
    document.body.style = 'background: #262629;';
    const leftcontainer = {
        height: "auto",
    border: "1px solid rgba(255,255,255,0.07)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    borderRadius: "12px",
    margin: "50px 0",
    
    }
    return(
        <>
        <div style={{display:"flex", flexWrap:"wrap", boxSizing:"border-box", width:"94%", justifyContent:"space-around", marginTop:"80px",marginLeft:"40px",marginRight:"40px"}}>
             <div style={leftcontainer}>
                 <div>
                    <img src="selectedplan.png" width="354px"/>
                 </div>
                 <div>
                    <CollapsedCompMain image="https://aha-web.evergent.com/0593e1f26e94f86af6dd50d99123cd45.svg" text="UPI"/>
                 </div>
                 <div>
                    <CollapsedComp image="https://aha-web.evergent.com/534eebff557b445362290abc1554dd47.svg" text="Credit Card/Debit Card"  />
                 </div>
                 <div>
                    <CollapsedComp image="https://aha-web.evergent.com/02bcd75ed983c23ca4095ab97ddf48c4.svg" text="Wallets"/>
                 </div>
                 <div>
                    <CollapsedComp image="https://aha-web.evergent.com/60154b4ba4fa4fd16b171e9c4b5577bd.svg" text="Netbanking"/>
                 </div>
                 <div>
                    <CollapsedComp image="https://aha-web.evergent.com/71e76a3a60f6ebb0dd4a8658aa4e92a3.svg" text="Pay Later"/>
                 </div>
             </div>
             <div style={{marginTop:"50px"}}>
                 <h2 style={{fontWeight:600, color:"white", fontSize:"18px"}}>Enter Coupon Code</h2>
                 <div style={{display:"flex", marginTop:"30px", marginBottom:"30px"}}>
                  <div><input type="text" placeholder="  Enter Coupon / Offer / Refferal Code" className="inputbase" onChange={couponChange}/></div>
                  <button className="applybtn"><span style={{fontSize:"11px"}} onClick={applyCoupon}>Apply</span></button>
                 </div>
                 <h2 style={{fontWeight:600, color:"white", fontSize:"18px"}}>Payment Details</h2>
                 <div style={{display:"flex" , justifyContent:"space-between",marginTop:"30px"}}>
                       <div>
                        <p style={{fontSize:"12px"}}>Subscription Charges</p>
                       </div>
                       <div>
                        <p style={{fontSize:"12px"}}>₹ 699</p>
                       </div>
                 </div>
                 <div style={{display:"flex" , justifyContent:"space-between"}}>
                       <div>
                        <p style={{fontSize:"12px"}}>Bag Subtotal</p>
                       </div>
                       <div>
                        <p style={{fontSize:"12px"}}>₹ {price}</p>
                       </div>
                 </div>
                 <div style={{display:"flex" , justifyContent:"space-between"}}>
                       <div>
                        <p style={{fontSize:"12px"}}>Total Payable</p>
                       </div>
                       <div>
                        <p style={{fontSize:"12px"}}>₹ {price}</p>
                       </div>
                 </div>
                 <div style={{display:"flex", justifyContent:"space-between", marginTop:"50px"}}>
                 <div>
                  <p>Total  <span style={{fontSize:"20px"}}>₹ {price}</span></p>
                  
                 </div>
                 <div >
                  <button type="button" className="paybtn" onClick={finalPay}>Pay Now</button>
                 </div>
                 </div>
                 <p className="foot">You will be charged ₹699 once a year until you cancel. By proceeeding, I  confirm <br/> that I am over 18, and agree to the Terms of use and Privacy Policy</p>

             </div>
        </div>
        

        </>
    )
}