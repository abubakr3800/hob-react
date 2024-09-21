import { useEffect, useState } from "react";
import useTraselator from "../../Hooks/useTranselaor";
import Carousel from "../Carousel";
import InfoCard from "../InfoCard";
import { Link, useParams } from "react-router-dom";


export default function Hotel(props){
    const hotel = props.hotel
    const id = hotel.id;
    const [images,setImages] = useState([]);
    const [transelatedWords,] = (useTraselator('hotel'))
    const dId = useParams();

    async function getImages(id){
        setImages([]);
        const api = await fetch("https://api.hobitourstravel.com/hotel/img/"+id)
        const res = await api.json();
        setImages(res.data);
    }

    const stars =()=>{
        const el =[];
        for (let index = 1; index <= hotel.rate; index++) {
            el.push(<i key={index} className="bi bi-star-fill"style={{color:"#eaa157"}}></i>);
        }
        return el
    }
    useEffect(()=>{
        getImages(id)
    },[id])
    
    return(
        <>
            <div className="col col-lg-12 card shadow p-3 mt-0">
            <h2 className="pt-3 pb-1 text-center" style={{color:"#485664"}}>{hotel.name}</h2>
            <div className="d-flex justify-content-center mb-2">
                {hotel.rate && stars() }
            </div>
            
            {images.length ? <Carousel images={images}/> : <h2 className="text-danger text-center card p-2"><i className="bi bi-exclamation-triangle h1"></i>{transelatedWords.p3}</h2>         }
            
            <p className="my-2 card p-2 h5" style={{color:"#485664"}}>
                <span className="h5" style={{color:"#eaa157"}}>{transelatedWords.p1}</span>
                {hotel.description}</p>
                <Link type="button" className="btn btn-secondary btn-lg btn-block" to={'/destination/'+dId.id}>{transelatedWords.p2}</Link>
            </div>
            <InfoCard />
        </>
    )
}