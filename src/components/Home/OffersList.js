import { useEffect, useState } from "react";
import Card from "./Card";
import useTraselator from "../../Hooks/useTranselaor";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../../rtk/offersSlice";


export default function OffersList(){

    const [transelatedWords,lan] = (useTraselator('offersTitle'));
    const words=[transelatedWords.p1,transelatedWords.p2,transelatedWords.p3,transelatedWords.p4]
    const offers = useSelector((state)=>state.offers)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getOffers(lan));
        if (lan === 'ar')
            document.getElementById('Ocards').classList.add('rtl')
        else
        document.getElementById('Ocards').classList.remove('rtl')
    },[lan])

    return(
        <>
        <div className="text-center m-5">
            <h1 id='offer' className="title">{transelatedWords.title}</h1>
        </div>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-2 mb-2" id="Ocards">
        {
            offers.length === 0 && <LoadingSpinner />
        }
        {
            offers.map((offer)=>
                <Link className="text-decoration-none" to={"/offer/"+offer.id} key={offer.id}>
                <Card title={offer.name} description={offer.description} image={offer.image}
                    day= {offer.name && offer.day_night.split(',')[0]}
                    night={offer.name && offer.day_night.split(',')[1]}
                    words ={offer.name && words}/>
                </Link>
            )
        }
        </div>
        </div>
        </>
    )
}