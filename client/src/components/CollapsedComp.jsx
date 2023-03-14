
import './CollapsedComp.css' ;

export function CollapsedComp({image,text}){
   
    return (
<div className="accordion accordion-flush" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <img src={image} width="18px" height="14px"/>
        &nbsp;
        &nbsp;
        &nbsp;

        {text}
      </button>
    </h2>
   </div>
  
  </div>
    )
    
}