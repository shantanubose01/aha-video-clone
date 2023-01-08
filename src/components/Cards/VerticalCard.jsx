import style from './VerticalCard.module.css';
import { useNavigate } from 'react-router-dom';

function VerticalCard(props) {
    const {image, title, id} = props;
    const navigate = useNavigate();

    const handleClick = (e) =>{
        localStorage.setItem("tmdbID", id.toString());
        navigate("/player");
    }
    
    return ( 
        <div className={style.veticalCard} onClick={handleClick}>
            <div className={style.imgContainer}> 
                <img className={style.img} src={image===null? "https://image-resizer-cloud-api.akamaized.net/image/59692D16-37C9-4563-956B-0AFFD26DB506/0-2x3.jpg?width=240" : image} alt="title" />
            </div>
            <div className={style.titleDiv}>
                <div className={style.title}>{title}</div>
            </div>
        </div>
     );
}

export default VerticalCard;