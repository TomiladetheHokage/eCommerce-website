import style from "./style/ReviewCard.module.css"
import checkMark from "../assets/images/checkMark.png"



const ReviewCard = ({name, comment}) => {

    return(
        <div className={style['review-card']}>

                <div className={style['name-tag']}>
                    <h4 className={style['name']}>{name}</h4>
                    <img src={checkMark} alt="checkMark"/>
                </div>
                <p className={style['paragraph']}>{comment}</p>

        </div>
    )
}
export default ReviewCard;