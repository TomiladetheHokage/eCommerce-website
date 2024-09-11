import styles from './style/Newarrival.module.css'
import Card from "../../components/Card";
import {useState, useEffect} from "react";
import NoAvailableProducts from '../../components/NoAvailableProducts'
import ViewAllButton from "../../components/ViewAllButton";


const NewArrival = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/mens-shirts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data.products);
        })

            .catch(error => console.log(error));
    }, []);


    return (
        <div className={styles['New-arrival-section']}>
            <h1 className={styles['header']}>New Arrivals</h1>

            <div className={styles['items']}>
                {products.length > 0 ? (
                    products.slice(0, 4).map((product) => (
                        <Card
                            image={product.images[0]}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    ))
                ) : (
                   <NoAvailableProducts/>
                )}
            </div>

            <ViewAllButton disabled={products.length === 0}/>

        </div>
    )
}
export default NewArrival