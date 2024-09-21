import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import useTraselator from "../../Hooks/useTranselaor";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations } from "../../rtk/destinationsSlice";


export default function DestinationsList(){

    const destinations = useSelector((state)=>state.destinations)
    const [transelatedWords,lan] = (useTraselator('Navbar'))
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getDestinations(lan))
        if (lan === 'ar')
            document.getElementById('cards').classList.add('rtl')
        else
        document.getElementById('cards').classList.remove('rtl')
    },[lan])

    return(
        <>
            <div className="text-center m-5" >
            <h1 id='destination' className="title">{transelatedWords.Destinazioni}</h1>
            </div>
            <div className="container" >
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-2 mb-2" id="cards">
                    {
                        destinations.length === 0 && <LoadingSpinner />
                    }
                    {
                        destinations.map((destination)=>
                            <Link className="text-decoration-none" to={"/destination/"+destination.id} key={destination.id}>
                        <Card key={destination.id} title={destination.name} description={destination.description} image={destination.image}/>
                        </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}