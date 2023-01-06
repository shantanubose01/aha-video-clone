import HorizontalCard from "../Cards/HorizontalCard";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import style from './HorizontalListWide.module.css'

function HorizontalListWide() {
    const [display, setDisplay] = useState("notdisplayed");
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 ,19,20];

    const slideLeft = () => {
        var slider = document.getElementById('slider2');
        slider.scrollLeft = slider.scrollLeft - slider.clientWidth;
        // console.log(slider.clientWidth);
    };
    
    const slideRight = () => {
        var slider = document.getElementById('slider2');
        slider.scrollLeft = slider.scrollLeft + slider.clientWidth;
        // console.log(slider.clientWidth);
    };

    const showArrow = ()=>{
        let leftarrowRef = document.getElementById("leftarrow");
        let rightarrowRef = document.getElementById("rightarrow");
        setDisplay("displayed");
    }

    return ( 
        <div className={style.listwrapper}>
            
            <div className={style.horizontalList} id="slider2" 
            onMouseEnter={()=>showArrow()}
            onMouseLeave={()=>setDisplay("notdisplayed")}>
            {arr.map((e, i)=>{
                return (
                    <HorizontalCard 
                    image="https://image-resizer-cloud-api.akamaized.net/image/998DEE7A-492F-4E20-9C5E-EA7B186E0A5F/0-16x9.jpg?width=336"
                    title={`${e} Agent Anand`}
                    key={i}
                />
                )
            })}
                
            </div>
            <div className="arrow_list">
                <div className={[style.leftarrowDiv, style.display].join(' ') }  id="leftarrow">
                    <div className={style.leftarrow} onClick={()=>slideLeft()}>
                    {/* <img src="https://www.aha.video/left-arrow.9dac92970c7bc4c051e3.png"/> */}
                    <MdChevronLeft className={style.lefticon} size={40}/>
                    </div>
                </div>
                <div className={style.rightarrowDiv} id="rightarrow">
                    <div className={style.rightarrow} onClick={()=>slideRight()}>
                    {/* <img src="https://www.aha.video/aha-arrow.3ae0cd913ff5a84187b2.svg" /> */}
                    <MdChevronRight className={style.righticon} size={40}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HorizontalListWide;