import './style/Newarrival.css'
import Card from "./Card";
import mockUp from '../../assets/images/Screenshot_2024-09-03_184700-removebg-preview.png'



const NewArrival = () => {
    return (
        <div className='New-arrival-section'>
            <h1 className='header'>New Arrivals</h1>

            <div className='items'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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