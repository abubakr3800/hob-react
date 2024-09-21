import { useEffect, useState } from "react"
import useTraselator from "../../Hooks/useTranselaor";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../Carousel";
import InfoCard from "../InfoCard";

export default function Offer(){
    
    const [offer,setOffer] = useState({});
    const [images,setImages] = useState([]);
    const [transelatedWords,lan] = (useTraselator('offer'))
    const navigate = useNavigate();
    const {id} = useParams()
    
    async function getOffer(id,lan){
        const api = await fetch("https://api.hobitourstravel.com/Offer/"+id+'/'+lan)
        const res = await api.json();
        if(res.success)
            setOffer(res.data);
        else
            navigate("/");
    }

    async function getImages(id){
        const api = await fetch("https://api.hobitourstravel.com/Offer/img/"+id)
        const res = await api.json();
        setImages(res.data);
    }

    useEffect(()=>{
        getOffer(id,lan);
        getImages(id);
        if (lan === 'ar')
            document.getElementById('offer').classList.add('rtl')
        else
        document.getElementById('offer').classList.remove('rtl')
    },[lan])

    return(
        <>
        <div className="container top p-3" id="offer" style={{minHeight:500}}>
            <div className="col col-lg-12 card shadow p-3">
            <h2 className="pt-3 pb-0 text-center" style={{color:"#485664"}}>{offer.name}</h2>
            {offer.name &&
            <p className="text-secondary text-center">{transelatedWords.p1} <span style={{color:"#eaa157"}}>{offer.day_night.split(',')[0]}</span> {transelatedWords.p2} <span style={{color:"#eaa157"}}>{offer.day_night.split(',')[1]}</span> {offer.day_night.split(',')[1] > 1? transelatedWords.p4:transelatedWords.p3}</p>
            }
            {images.length ? <Carousel images={images}/> : <h2 className="text-center text-danger card p-2"><i className="bi bi-exclamation-triangle h1"></i>Images Not Found !</h2>}
            
            <p className="my-2 card p-2 h5" style={{color:"#485664"}}>
                <span className="h5" style={{color:"#eaa157"}}>{transelatedWords.p5}</span>
                {offer.description}</p>
            </div>
            <InfoCard />
        </div>
        </>
    )
} 