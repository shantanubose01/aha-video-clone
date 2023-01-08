import HorizontalCard from "../../components/Cards/HorizontalCard";
import style from "./Search.module.css";


const Results = (props) => {
  return (
    <div>
     <p className={style.para}>Showing Results for <strong className={style.strong}>{props.query}</strong></p>
      <div className={style.results}> 
        {props.data.map((e, i) => {
            console.log(e);
          let imgurl;
          if (e.backdrop_path) {
            imgurl = `https://image.tmdb.org/t/p/w1280${e.backdrop_path}`;
          } else if (e.poster_path) {
            imgurl = `https://image.tmdb.org/t/p/w1280${e.poster_path}`;
          } else if (e.still_path) {
            imgurl = `https://image.tmdb.org/t/p/w1280${e.still_path}`;
          } else {
            imgurl = `https://image-resizer-cloud-api.akamaized.net/image/A5195311-35E3-46F0-BA14-58F1B96AD6ED/0-16x9.jpg?width=336`;
          }
          return (
            <HorizontalCard
              image={imgurl}
              title={e.title || e.name}
              key={i}
              id={e.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
