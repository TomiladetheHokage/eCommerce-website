import './style/TopSelling.css'
import tankTop from '../../assets/images/Screenshot_2024-09-03_230942-removebg-preview.png'
import Card from "./Card";
const TopSelling = () => {
    return(
        <div className="top-selling-section">
            <h1 className='headere'>
                Top Selling
            </h1>

            <div className='items'>

                <Card/>

                <div className='item'>
                    <div className='image-container'>
                        <img className='mockup' src={tankTop}/>
                    </div>
                    <p>Veritical stripped shirt</p>
                    <div className="stars">⭐⭐⭐⭐⭐ 4.5/5</div>
                    <p>$20</p>
                </div>

                <Card/>
                <Card/>
            </div>

            <div className='button-container'>
                <button className='view-all-button'>
                    VIEW ALL
                </button>
            </div>
        </div>
    )
}
export default TopSelling