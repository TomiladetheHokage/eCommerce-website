import './style/Newarrival.css'
import Card from "./Card";
import mockUp from '../../assets/images/Screenshot_2024-09-03_184700-removebg-preview.png'
import {useState, useEffect} from "react";



const NewArrival = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='New-arrival-section'>
            <h1 className='header'>New Arrivals</h1>

            <div className='items'>
                {products.slice(0, 4).map((product) => (
                    <Card
                        image={product.image}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        // description={product.description}
                    />
                ))}
            </div>

            <div className='button-container'>
                <button className='view-all-button'>
                    VIEW ALL
                </button>
            </div>
        </div>
    )
}
export default NewArrival