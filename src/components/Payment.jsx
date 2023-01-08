import { CollapsedComp } from "./CollapsedComp";
import { CollapsedCompMain } from "./CollapsedCompMain";


export function Payment(){
    document.body.style = 'background: #262629;';
    const leftcontainer = {
        height: "auto",
    border: "1px solid rgba(255,255,255,0.07)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    borderRadius: "12px",
    margin: "30px 0"
    }
    return(
        <>
        <div style={{display:"flex", flexWrap:"wrap", boxSizing:"border-box", width:"94%"}}>
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
             <div>
                
             </div>
        </div>
        

        </>
    )
}