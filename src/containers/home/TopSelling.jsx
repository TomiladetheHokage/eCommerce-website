import Card from "../../components/Card";
import {useEffect, useState} from "react";
import productsData from "../../product.json";
import styles from '../home/style/TopSelling.module.css'
import ViewAllButton from '../../components/ViewAllButton'
import NoAvailableProducts from "../../components/NoAvailableProducts";



const TopSelling = () => {
    // const [products] = useState(productsData);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/womens-dresses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className={styles["top-selling-section"]}>
            <h1 className={styles['header']}>Top Selling</h1>

            <div className={styles['items']}>
                {products.length > 0 ? (
                    products.slice(0, 4).map((product) => (
                        <Card
                            key={product.id}
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

            <ViewAllButton />

        </div>
    )
}
export default TopSelling