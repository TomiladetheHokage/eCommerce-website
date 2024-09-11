import './style/BrowseByDressStyle.css'
import CasualCard from "../../components/CasualCard";
import FormalCard from "../../components/FormalCard";
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
                        image={'https://res.cloudinary.com/dvtbqpr8v/image/upload/v1722945332/samples/outdoor-woman.jpg'}
                    />
                    <FormalCard
                        title='Formal'
                        image={'https://res.cloudinary.com/dvtbqpr8v/video/upload/v1722945327/samples/cld-sample-video.mp4'}
                    />
                </div>

                <div className='style-card'>
                    <FormalCard
                        title='Party'
                        image={'https://res.cloudinary.com/dvtbqpr8v/image/upload/v1722945324/samples/people/jazz.jpg'}
                    />
                    <CasualCard
                        title='Gym'
                        image={'https://res.cloudinary.com/dvtbqpr8v/image/upload/v1722945333/cld-sample-3.jpg'}
                    />
                </div>


            </div>

        </div>
    )
}
export default browseByDressStyle