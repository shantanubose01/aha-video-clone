import HorizontalCard from "../Cards/HorizontalCard";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import style from "./HorizontalListWide.module.css";
import Loading from "../Loading";

function HorizontalListWide(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${props.url}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  }, []);

  // let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 ,19,20];

  const slideLeft = () => {
    var slider = document.getElementById(props.id);
    slider.scrollLeft = slider.scrollLeft - slider.clientWidth * 0.9;
    // console.log(slider.clientWidth);
  };

  const slideRight = () => {
    var slider = document.getElementById(props.id);
    slider.scrollLeft = slider.scrollLeft + slider.clientWidth * 0.9;
    // console.log(slider.clientWidth);
  };

  return (
    loading ? <Loading /> :
    <div className={style.listwrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px 20px 0px 20px",
          color: "white",
        }}
      >
        <h2>{props.title}</h2>
        <h2>See All</h2>
      </div>
      <div className={style.horizontalList} id={props.id}>
        {data.map((e, i) => {
          let imgurl;
          if (e.backdrop_path == null) {
            {/* e.backdrop_path = "/d3l7kgFJyLTTQSrR4ysCk5yeVyW.jpg"; */}
            imgurl = `https://image-resizer-cloud-api.akamaized.net/image/A5195311-35E3-46F0-BA14-58F1B96AD6ED/0-16x9.jpg?width=336`;
          } else imgurl = `https://image.tmdb.org/t/p/w1280${e.backdrop_path}`;
          return (
            <HorizontalCard
              image={imgurl}
              title={e.title || e.name}
              key={i}
            />
          );
        })}
      </div>
      <div className="arrow_list">
        <div
          className={style.leftarrowDiv}
          id="leftarrow"
          onClick={() => slideLeft()}
        >
          <div className={style.leftarrow} onClick={() => slideLeft()}>
            {/* <img src="https://www.aha.video/left-arrow.9dac92970c7bc4c051e3.png"/> */}
            <MdChevronLeft className={style.lefticon} size={40} />
          </div>
        </div>
        <div
          className={style.rightarrowDiv}
          id="rightarrow"
          onClick={() => slideRight()}
        >
          <div className={style.rightarrow} onClick={() => slideRight()}>
            {/* <img src="https://www.aha.video/aha-arrow.3ae0cd913ff5a84187b2.svg" /> */}
            <MdChevronRight className={style.righticon} size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalListWide;
