import style from './VerticalCard.module.css';

function VerticalCard(props) {
    const {image, title} = props;
    return ( 
        <div className={style.veticalCard}>
            <div className={style.imgContainer}> 
                <img className={style.img} src={image} alt="title" />
            </div>
            <div className={style.titleDiv}>
                <div className={style.title}>{title}</div>
            </div>
        </div>
     );
}

export default VerticalCard;