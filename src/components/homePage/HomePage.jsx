import React from "react";
import './HomePage.css';
import pictureBanner from '../../assets/homepageBanner.jpg'

const HomePage = () => {
    return (
        <div>
            <div className="picture-banner">
                <img src={pictureBanner} className='banner-img'/>
                <button className="event-button">Find your next event</button>
            </div>
        </div>
    )
}

export default HomePage