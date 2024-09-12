import './style/BrowseByDressStyle.css'
import CasualCard from "../../components/CasualCard";
import FormalCard from "../../components/FormalCard";
import maleModel from '../../assets/images/Screenshot_2024-09-04_132913-removebg-preview.png'
import formal from '../../assets/images/Screenshot_2024-09-11_063844-removebg-preview.png'
import party from '../../assets/images/Screenshot_2024-09-11_064230-removebg-preview.png'
import gym from '../../assets/images/Screenshot_2024-09-11_064726-removebg-preview.png'

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
                        image={party}
                    />
                    <CasualCard
                        title='Gym'
                        image={gym}
                    />
                </div>
            </div>

        </div>
    )
}
export default browseByDressStyle