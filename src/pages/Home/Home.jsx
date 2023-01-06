import HorizontalCard from "../../components/Cards/HorizontalCard";
import VerticalCard from "../../components/Cards/VerticalCard";
import HorizontalListTall from "../../components/List/HorizontalListTall";
import HorizontalListWide from "../../components/List/HorizontalListWide";
import style from "./Home.module.css";


const Home = () => {
    return ( 
        <div className={style.homeDivClass} id={style.homeDivID}>
            <h1>
            Aha Homepage
            </h1>
        <HorizontalListTall />
            {/* <HorizontalCard 
                image = "https://image-resizer-cloud-api.akamaized.net/image/B890CBBD-4869-4D11-8740-AFD01DF72377/0-2x3.jpg?width=240"
                title = "Agent Anand Santosh"
            /> */}
        <HorizontalListWide />
        </div>
     );
}
 
export default Home;