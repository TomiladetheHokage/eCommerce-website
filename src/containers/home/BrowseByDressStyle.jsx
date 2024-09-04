import './style/BrowseByDressStyle.css'
import mock from '../../assets/images/Layer 1.png'
import maleModel from '../../assets/images/Screenshot_2024-09-04_132913-removebg-preview.png'
const browseByDressStyle = () => {
    return(
        <div>
            <div className='browse-section'>
                <h1 className='headerr'> BROWSE BY DRESS STYLE </h1>

                <div className='style-card'>

                    <div className='casual-card'>
                        <h2 className='style-title'> Casual </h2>
                        <img className='style-image' src={maleModel}/>
                    </div>

                    <div className='formal-card'>
                        <h2 className='style-title'> Formal </h2>
                        <img className='style-image' src={mock}/>
                    </div>

                </div>


            </div>

        </div>
    )
}
export default browseByDressStyle