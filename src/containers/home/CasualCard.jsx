import maleModel from "../../assets/images/Screenshot_2024-09-04_132913-removebg-preview.png";

const CasualCard = ({title, image}) => {
    return (
        <div className='casual-card'>
            <h2 className='style-title'>{title}</h2>
            <img className='style-image' src={image}/>
        </div>
    )
}
export default CasualCard