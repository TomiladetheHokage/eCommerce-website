import './style/BrowseByDressStyle.css'
import CasualCard from "./CasualCard";
import FormalCard from "./FormalCard";
import mock from '../../assets/images/Layer 1.png'
import maleModel from '../../assets/images/Screenshot_2024-09-04_132913-removebg-preview.png'
import formal from '../../assets/images/Layer 1.png'
const browseByDressStyle = () => {
    return(
        <div>
            <div className='browse-section'>
                <h1 className='headerr'> BROWSE BY DRESS STYLE </h1>

                <div className='style-card'>
                    <CasualCard
                        title='Casual'
                        image={maleModel}
                    />
                    <FormalCard
                        title='Formal'
                        image={formal}
                    />
                </div>

                <div className='style-card'>
                    <FormalCard
                        title='Party'
                        image={formal}
                    />
                    <CasualCard
                        title='Gym'
                        image={maleModel}
                    />
                </div>


            </div>

        </div>
    )
}
export default browseByDressStyle