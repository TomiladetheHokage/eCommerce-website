import './style/TopSelling.css'
import tankTop from '../../assets/images/Screenshot_2024-09-03_230942-removebg-preview.png'
import Card from "./Card";
import {useEffect, useState} from "react";
const TopSelling = () => {



    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.log(error));
    }, []);

    return(
        <div className="top-selling-section">
            <h1 className='headere'>
                Top Selling
            </h1>

            <div className='items'>
                {products.slice(0,4).map((product) => (
                    <Card
                    image={product.image}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                    />
                ))}

                <div className='item'>
                    <div className='image-container'>
                        <img className='mockup' src={tankTop}/>
                    </div>
                    <p>Veritical stripped shirt</p>
                    <div className="stars">⭐⭐⭐⭐⭐ 4.5/5</div>
                    <p>$20</p>
                </div>


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