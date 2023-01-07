import VerticalCard from "../../components/Cards/VerticalCard";
import style from "./ListShowsTall.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const ListShowsTall = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const[img, setImg] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`${props.url}`)
      .then((response) => response.json())
      .then((data) => {
        if(data.poster_path) setImg(path=>data.poster_path);
        if(data.results)setData(data.results);
        else setData(data.episodes);
        setLoading(false);
      });
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById(props.id);
    slider.scrollLeft = slider.scrollLeft - slider.clientWidth - 100;
    // console.log(slider.clientWidth);
  };

  const slideRight = () => {
    var slider = document.getElementById(props.id);
    slider.scrollLeft = slider.scrollLeft + slider.clientWidth - 100;
    // console.log(slider.clientWidth);
  };

  return loading ? (
    <Loading />
  ) : (
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
        {data?.map((e, i) => {
            let imgurl;
            console.log(img);
            if(e.poster_path){
                imgurl = `https://image.tmdb.org/t/p/w1280${e.poster_path}`;
            }
            else if(e.backdrop_path ){
                imgurl = `https://image.tmdb.org/t/p/w1280${e.backdrop_path}`;
            }
            else if(e.still_path){
                imgurl = `https://image.tmdb.org/t/p/w1280${e.still_path}`;
            }
            else if(img){
              imgurl = `https://image.tmdb.org/t/p/w1280${img}`;
            }
            else{
                imgurl = `https://image-resizer-cloud-api.akamaized.net/image/B890CBBD-4869-4D11-8740-AFD01DF72377/0-2x3.jpg?width=240`;
            }
          return (
            <VerticalCard
              image={imgurl}
              title={e.title || e.name}
              key={i}
            />
          );
        })}
      </div>
      <div className="arrow_list">
        <div className={style.leftarrowDiv} id="leftarrow">
          <div className={style.leftarrow} onClick={() => slideLeft()}>
            {/* <img src="https://www.aha.video/left-arrow.9dac92970c7bc4c051e3.png"/> */}

            <MdChevronLeft className={style.lefticon} size={40} />
          </div>
        </div>
        <div className={style.rightarrowDiv} id="rightarrow">
          <div className={style.rightarrow} onClick={() => slideRight()}>
            {/* <img src="https://www.aha.video/aha-arrow.3ae0cd913ff5a84187b2.svg" /> */}
            <MdChevronRight className={style.righticon} size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListShowsTall;
