import HorizontalListTall from "../../components/List/HorizontalListTall";
import HorizontalListWide from "../../components/List/HorizontalListWide";
import Slider from "../../components/Carousel/Slider";

const Movies = (props) => {
  let id = 0;
  return (
    <div>
      <Slider />
      <HorizontalListTall
        id={id++}
        title="Trending"
        // url=" https://api.themoviedb.org/4/list/6564?page=1&api_key=584d1b1dc55719efed1f590d859903af"
        url="https://api.themoviedb.org/3/movie/popular?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&page=1"
      />
      <HorizontalListTall
        id={id++}
        title="aha Original Films"
        url="https://api.themoviedb.org/3/movie/popular?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&page=3"
      />
      <HorizontalListWide
        id={id++}
        title="New Releases"
        url="https://api.themoviedb.org/3/movie/now_playing?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=te&page=1"
      />

      <HorizontalListTall
        id={id++}
        title="All Time Block Busters"
        url="https://api.themoviedb.org/3/movie/top_rated?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=hi&page=1"
      />
      <HorizontalListTall
        id={id++}
        title="Latest Telegu Movies"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&year=2022"
      />
      <HorizontalListTall
        id={id++}
        title="Latest HollyWood Movies in Tamil"
        url="https://api.themoviedb.org/3/trending/movie/week?api_key=5b2334617cd63be51871f0ff36fb3b3c"
      />

      <HorizontalListTall
        id={id++}
        title="Old is Gold"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=hi&year=1950"
      />

      <HorizontalListTall
        id={id++}
        title="2021 Top Movies"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ta&year=2021"
      />
      <HorizontalListWide
        id={id++}
        title="Turkish Movies in Tamil"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=tr&year=2020"
      />

      <HorizontalListTall
        id={id++}
        title="Action"
        url="https://api.themoviedb.org/3/discover/tv?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&year=2019"
      />

      <HorizontalListWide
        id={id++}
        title="Popular in Telugu"
        url="https://api.themoviedb.org/3/movie/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=te&page=2"
      />
    </div>
  );
};

export default Movies;
