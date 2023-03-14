import { BsArrowLeft } from "react-icons/bs";
import SubscriptionFooter from "./SubscriptionFooter";
import ViewPlans from "./ViewPlans";
import Button from 'react-bootstrap/Button';
import SubscriptionConfirm from "./SubscriptionConfirm";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

export default function SubscriptionPlans(){
  
    document.body.style = 'background: #262629;';
    return (
      <>
      <Header/>
    <div style={{marginTop:"40px" , marginLeft:"130px", marginRight:"130px"}}>
      <div style={{display:"flex"}}>
        <div style={{marginTop:"12px"}}>
        <BsArrowLeft style={{color : "white", fontSize:"28px"}}/>
        </div>
        <div style={{fontSize:"32px" , fontWeight:700 , color:"#fff", margin: "0 0 0 2vw"}}>
            <p>Choose a Plan</p>
        </div>
      </div>
       <ViewPlans/>
       <SubscriptionFooter/>
      
       <SubscriptionConfirm
        
      />
    </div>
    </>
    )
}