import { useState } from "react";
import About from "./About";
import DestinationsList from "./DestinationsList";
import HomeCarousel from "./HomeCarousel";
import OffersList from "./OffersList";
import Servicies from "./Servicies";

export default function Home(){

    return(
        <>
        <HomeCarousel />
        <About />
        <Servicies />  
        <DestinationsList  />
        <OffersList />
        </>
    )
}