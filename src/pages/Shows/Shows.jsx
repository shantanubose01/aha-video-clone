import ListShowsTall from "./ListShowsTall";
import ListShowsWide from "./ListShowsWide";
import Slider from "../../components/Carousel/Slider";

const Shows = () => {
  let id = 0;
  return (
    <div>
      <Slider />
      <ListShowsTall
        id={id++}
        title="Top aha Original Shows | First Ep Free"
        // url=" https://api.themoviedb.org/4/list/6564?page=1&api_key=584d1b1dc55719efed1f590d859903af"
        url="https://api.themoviedb.org/3/tv/popular?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&page=1"
      />
      <ListShowsWide
        id={id++}
        title="Reality and Talks Shows"
        url="https://api.themoviedb.org/3/tv/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=te&page=2"
      />
      <ListShowsTall
        id={id++}
        title="New Releases"
        url="https://api.themoviedb.org/3/movie/now_playing?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=te&page=1"
      />
      <ListShowsWide
        id={id++}
        title="Agent Anand Santosh"
        url="https://api.themoviedb.org/3/tv/206379/season/1?api_key=5b2334617cd63be51871f0ff36fb3b3c&language=en-US"
      />
      <ListShowsTall
        id={id++}
        title="Korean Drama in Telugu"
        url="https://api.themoviedb.org/3/tv/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=ko&page=1"
      />
      <ListShowsTall
        id={id++}
        title="Japanese Drama in Telugu"
        url="https://api.themoviedb.org/3/tv/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=ja&page=1"
      />
      <ListShowsTall
        id={id++}
        title="Sam Jam"
        url="https://api.themoviedb.org/3/tv/117122/season/1?api_key=5b2334617cd63be51871f0ff36fb3b3c&language=en-US"
      />
      <ListShowsWide
        id={id++}
        title="Parampara"
        url="https://api.themoviedb.org/3/tv/153637/season/1?api_key=5b2334617cd63be51871f0ff36fb3b3c&language=en-US"
      />
      <ListShowsTall
        id={id++}
        title="Top Hindi Shows"
        url="https://api.themoviedb.org/3/tv/top_rated?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=hi&page=1"
      />
      <ListShowsTall
        id={id++}
        title="Top Urdu Shows in Telugu"
        url="https://api.themoviedb.org/3/tv/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=ur&page=1"
      />

      <ListShowsTall
        id={id++}
        title="Agent Anand Santosh"
        url="https://api.themoviedb.org/3/tv/206379/season/1?api_key=5b2334617cd63be51871f0ff36fb3b3c&language=en-US"
      />
      

      
    </div>
  );
};

export default Shows;
