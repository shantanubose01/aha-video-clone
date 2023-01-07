import HorizontalCard from "../../components/Cards/HorizontalCard";
import VerticalCard from "../../components/Cards/VerticalCard";
import HorizontalListTall from "../../components/List/HorizontalListTall";
import HorizontalListWide from "../../components/List/HorizontalListWide";
import style from "./Home.module.css";
import Slider from "../../components/Carousel/Slider";


const Home = () => {
    return ( 
        <div className={style.homeDivClass} id={style.homeDivID}>
        <Slider/>
         <HorizontalListTall
        id="Slider1"
        title="New Releases"
        url=" https://api.themoviedb.org/4/list/6564?page=1&api_key=584d1b1dc55719efed1f590d859903af"
         />
        <HorizontalListTall 
        id="Slider2"
         title="Latest HollyWood Movies in Tamil"
         url="https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"

         /> 
        <HorizontalListTall
        id="Slider3"
         title="Latest Telegu Movies"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&year=2019" />
        <HorizontalListTall
         id="Slider4"
        title="Tamil Movies"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ta&year=2010"
         />
        <HorizontalListTall
         id="Slider5"
        title="Korean Movies in Tamil"
        url="https://api.themoviedb.org/3/discover/movie?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=ko&year=2010"

         />

        <HorizontalListTall
                id="Slider6"
        title="Tamil Tv Shows "
        url="https://api.themoviedb.org/3/discover/tv?api_key=584d1b1dc55719efed1f590d859903af&with_original_language=te&year=2019"
        
         /> 
          <HorizontalListWide
          
        
         />
        </div>
     );
}
 
export default Home;