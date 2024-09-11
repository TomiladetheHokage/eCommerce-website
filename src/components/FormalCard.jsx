import mock from "../assets/images/Layer 1.png";

const FormalCard = ({title, image}) => {
    return (
        <div className='formal-card'>
            <h2 className='style-title'>{title}</h2>
            <img className='style-image' src={image}/>
        </div>
    )
}
export default FormalCard;