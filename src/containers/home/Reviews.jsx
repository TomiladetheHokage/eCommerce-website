import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from '../../components/reviewCard';
import style from './style/Review.module.css';
import rightArrow from "../../assets/images/Vector (1).png";
import leftArrow from "../../assets/images/Vector.png";

const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div className={style['reviews']}>
                <h1 className={style['review-header']}>OUR HAPPY CUSTOMERS</h1>
                <div className={style['arrows']}>
                    <img src={leftArrow} alt="Left Arrow"/>
                    <img src={rightArrow} alt="Right Arrow"/>
                </div>
            </div>

            <Carousel responsive={responsive}>
                <div><ReviewCard name="Alex" comment="Finding clothes that align with my personal style"/></div>
                <div><ReviewCard name="Jane" comment="The service was amazing and delivery was fast."/></div>
                <div><ReviewCard name="John" comment="Great quality products at affordable prices."/></div>
                <div><ReviewCard name="Emily" comment="Loved the unique styles, definitely shopping again!"/></div>
                <div><ReviewCard name="Sophia" comment="Fantastic selection of trendy clothes, very satisfied!"/></div>
                <div><ReviewCard name="Michael" comment="The customer support was top-notch, and the return process was smooth."/></div>
                <div><ReviewCard name="Olivia" comment="The clothing fits perfectly and the materials are top quality."/></div>
                <div><ReviewCard name="Daniel" comment="Excellent shopping experience, will definitely recommend to friends!"/></div>
            </Carousel>
        </div>
    );
};

export default Reviews;
