import React from "react";
import './HomePage.css';
import pictureBanner from '../../assets/homepageBanner.jpg'

const categories = [
    {id: 0, name: 'Today'},
    {id: 1, name: 'All'},
    {id: 2, name: 'For you'},
    {id: 3, name: 'Online'},
    {id: 4, name: 'Today'},
    {id: 5, name: 'This weekend'},
    {id: 6, name: 'Memorial Day'},
    {id: 7, name: 'Mental Health Awareness Month'},
    {id: 8, name: 'Free'},
    {id: 9, name: 'Music'},
    {id: 10, name: 'Food&Drink'},
    {id: 11, name: 'Charity&Causes'},
];

const HomePage = () => {
    return (
        <div>
            <div className="picture-banner">
                <img src={pictureBanner} className='banner-img'/>
                <button className="event-button">Find your next event</button>
            </div>
            <div className="category">
                <span className="header">Popular in</span>
                <div className="category-list">
                {categories.map((category) => (
                        <span key={category.id} className="category-content">
                            {category.name}
                        </span>
                ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage