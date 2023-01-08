import {Collapse} from 'bootstrap' ;
import './CollapsedComp.css' ;

export function CollapsedCompMain({image,text}){
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
      return new Collapse(collapseEl)
    })
    const verifyupistyle = {
      padding: "10px 20px !important",
    borderRadius: "30px !important",
    fontWeight: "600 !important",
    width: "100%",
    marginTop: "15px",
    textTransform: "none !important",
    background: "linear-gradient(180deg, #b61a09 -86.4%, #ff6d2e 100%)",
    color:"white"
    }
    return (
<div className="accordion accordion-flush" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <img src={image} width="44px" height="22px"/>
        &nbsp;
        &nbsp;
        &nbsp;

        {text}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <input placeholder='Enter UPI ID' type="text" />
      <button style={verifyupistyle} onClick={()=>{
        alert('UPI ID VERIFIED!')
      }}>Verify UPI ID</button>
      </div>
    </div>
  </div>
  
  </div>
    )
    
}