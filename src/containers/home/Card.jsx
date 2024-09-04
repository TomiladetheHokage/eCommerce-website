import mockUp from "../../assets/images/Screenshot_2024-09-03_184700-removebg-preview.png";

const Card = () => {
    return (
        <div className="card-wrapper">
            <div className='item'>
                <div className='image-container'>
                    <img className='mockup' src={mockUp}/>
                </div>
                <p>T-shirt with Tape Details</p>
                <div className="stars">⭐⭐⭐⭐⭐ 4.5/5</div>
                <p>$120</p>
            </div>
        </div>
    )
}
export default Card;