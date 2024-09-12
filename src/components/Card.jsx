import styles from '../containers/home/style/Newarrival.module.css'
import { useState } from "react";

const Card = ({ image, title, rating, price, description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);


    let descriptionOfProduct = showFullDescription ? description || "" : (description ? description.substring(0, 50) + "..." : "");

    return (
        <div className={styles["items"]}>
            <div className={styles['item']}>
                <div className={styles['image-container']}>
                    <img className={styles['mockup']} src={image} alt={title} />
                </div>
                <p>{title}</p>
                <p>#{price}</p>
                <div className={styles['description-container']}>
                    <p className={styles['description']}>{descriptionOfProduct}</p>
                </div>
                <button className={styles['viewButton']} onClick={() => setShowFullDescription(prevState => !prevState)}>
                    {showFullDescription ? 'less' : 'more'}
                </button>
            </div>
        </div>
    )
}

export default Card;
