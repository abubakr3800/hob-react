import { useEffect, useState } from "react";
import useTraselator from "../../Hooks/useTranselaor";
import { useNavigate, useParams } from "react-router-dom";
import InfoCard from "../InfoCard";
import Carousel from "../Carousel";
import { Link } from "react-router-dom";


const Destination = ()=>{

    const [destination,setDestination] = useState({});
    const [images,setImages] = useState([]);
    const [transelatedWords,lan] = (useTraselator('destination'))
    const navigate = useNavigate();
    const {id} = useParams()
    
    async function getDestination(id,lan){
        const api = await fetch("https://api.hobitourstravel.com/Destination/"+id+'/'+lan)
        const res = await api.json();
        if(res.success)
            setDestination(res.data);
        else
            navigate("/");
    }

    async function getImages(id){
        const api = await fetch("https://api.hobitourstravel.com/Destination/img/"+id)
        const res = await api.json();
        setImages(res.data);
    }

    useEffect(()=>{
        getDestination(id,lan);
        getImages(id)

        if (lan === 'ar')
            document.getElementById('destination').classList.add('rtl')
        else
        document.getElementById('destination').classList.remove('rtl')
    },[lan])

    return(
        <>
            <div className="container top p-3" id="destination">
            <div className="col col-lg-12 card shadow p-3">
            <h2 className="pt-3 pb-0 text-center" style={{color:"#485664"}}>{destination.name}</h2>
            
            {images.length ? <Carousel images={images}/> : <h2 className="text-danger text-center card p-2"><i className="bi bi-exclamation-triangle h1"></i>{transelatedWords.p3}</h2>}
            
            <p className="my-2 card p-2 h5" style={{color:"#485664"}}>
                <span className="h5" style={{color:"#eaa157"}}>{transelatedWords.p1}</span>
                {destination.description}</p>
            <div className="row align-items-center">
            <span className="col-12 h5" style={{color:"#eaa157"}}>{transelatedWords.p2}</span>
            {destination.places && (destination.places).map((place)=>
                <div className="col-sm-6 border border-1 rounded m-2" key={place} style={{width:"fit-content",backgroundColor:"#51acd8"}}>
                    <h5 className="m-1 text-light" >{place}</h5>
                </div>
            )}
            </div>
            <Link type="button" className="btn btn-secondary btn-lg btn-block" to={'/hotels/'+id}>{transelatedWords.p4}</Link>
            </div>
            <InfoCard />
        </div>
        </>
    )
}

export default Destination;