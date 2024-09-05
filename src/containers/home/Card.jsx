

const Card = ({image, title, rating, price, description}) => {
    return (
        <div className="card-wrapper">
            <div className='item'>
                <div className='image-container'>
                    <img className='mockup' src={image}/>
                </div>
                <p>{title}</p>
                <div className="stars">{rating}</div>
                <p>#{price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Card;