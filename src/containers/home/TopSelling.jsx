import Card from "./Card";
import {useState} from "react";
import productsData from "../../product.json";
import styles from '../home/style/TopSelling.module.css'
import ViewAllButton from '../../components/ViewAllButton'
import NoAvailableProducts from "../../components/NoAvailableProducts";



const TopSelling = () => {
    const [products] = useState(productsData);

    return (
        <div className={styles["top-selling-section"]}>
            <h1 className={styles['header']}>Top Selling</h1>

            <div className={styles['items']}>
                {products.length > 0 ? (
                    products.slice(0, 4).map((product) => (
                        <Card
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
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