
export default function ViewPlans(){
   
    return (
        <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" , gap:"10px", marginTop:"30px" , marginBottom:"50px"}}>
             <div style={{width:"433px" , height:"300px", cursor:"pointer"}}  data-toggle="modal" data-target="#exampleModalCenter">
                <img src="699plan.png" width="100%" height="100%"/>
             </div>
             <div>
                <img src="399plan.png" width="100%" height="100%"/>
             </div>
             <div>
                <img src="199plan.png" width="100%" height="100%"/>
             </div>
             
        </div>
    )
}