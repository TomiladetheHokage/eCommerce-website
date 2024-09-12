import React from 'react';
import TopNav from './TopNav';
import Hero from './Hero';
import NewArrival from "./NewArrival";
import TopSelling from "./TopSelling";
import BrowseByDressStyle from "./BrowseByDressStyle";
import Reviews from "./Reviews";

function Main(){
    return(
        <div>
            <TopNav />
            <Hero />
            <NewArrival/>
            <TopSelling/>
            <BrowseByDressStyle/>
            <Reviews/>
        </div>
    )
}

export default Main;