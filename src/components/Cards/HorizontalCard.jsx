import style from './HorizontalCard.module.css';

function HorizontalCard(props) {
    const {image, title} = props;
    return ( 
        <div className={style.horizontalcard}>
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