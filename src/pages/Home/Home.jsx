import HorizontalCard from "../../components/Cards/HorizontalCard";
import VerticalCard from "../../components/Cards/VerticalCard";
import HorizontalListTall from "../../components/List/HorizontalListTall";
import HorizontalListWide from "../../components/List/HorizontalListWide";
import style from "./Home.module.css";
import Slider from "../../components/Carousel/Slider";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
    const[loading, setLoading] = useState(true);
    let id = 0;
  return (
    <>
    <Header/>
    
    <div className={style.homeDivClass} id={style.homeDivID}>
      <Slider />
      <HorizontalListTall
        id={id++}
        title="New Releases"
        // url=" https://api.themoviedb.org/4/list/6564?page=1&api_key=584d1b1dc55719efed1f590d859903af"
        url="https://api.themoviedb.org/3/movie/now_playing?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ta"
      />
      <HorizontalListTall
        id={id++}
        title="Blockbusters on aha"
        url="https://api.themoviedb.org/3/movie/popular?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&page=3"
      />
      <HorizontalListTall
        id={id++}
        title="Latest HollyWood Movies in Tamil"
        url="https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
      />
      <HorizontalListWide 
        id={id++}
        title="Popular in Telugu"
        url="https://api.themoviedb.org/3/movie/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=te&page=1"
      />
      <HorizontalListTall
        id={id++}
        title="Latest Telegu Movies"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&year=2019"
      />
      <HorizontalListTall
        id={id++}
        title="Tamil Movies"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ta&year=2010"
      />
      <HorizontalListTall
        id={id++}
        title="Korean Movies in Tamil"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ko&year=2010"
      />

      <HorizontalListTall
        id={id++}
        title="Tamil Tv Shows "
        url="https://api.themoviedb.org/3/discover/tv?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&year=2019"
      />

      <HorizontalListTall
        id={id++}
        title="For Prabhas Fans"
        url=" https://api.themoviedb.org/4/list/6564?page=1&api_key=584d1b1dc55719efed1f590d859903af"
        // url="https://api.themoviedb.org/3/movie/now_playing?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ta"
      />
      <HorizontalListWide 
        id={id++}
        title="Popular in Telugu"
        url="https://api.themoviedb.org/3/movie/popular?api_key=5b2334617cd63be51871f0ff36fb3b3c&with_original_language=te&page=2"
      />
    </div>
    <Footer/>
    </>
  );
};

export default Home;
