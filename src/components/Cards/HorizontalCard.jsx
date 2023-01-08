import style from './HorizontalCard.module.css';
import { useNavigate } from 'react-router-dom';

function HorizontalCard(props) {
    const {image, title, id} = props;

    const navigate = useNavigate();

    const handleClick = (e) =>{
        // console.log(id)
        localStorage.setItem("tmdbID", id.toString());
        navigate("/player");
    }

    return ( 
        <div className={style.horizontalcard} onClick={handleClick}>
            <div className={style.imgContainer2}>
                <img className={style.img2} src={image} alt="title"/>
            </div>
            <div className={style.titleDiv}>
                <div className={style.title}>{title}</div>
            </div>
        </div>
     );
}

export default HorizontalCard;