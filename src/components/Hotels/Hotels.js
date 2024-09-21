import { useEffect, useState } from "react";
import useTraselator from "../../Hooks/useTranselaor";
import { useNavigate, useParams } from "react-router-dom";
import Hotel from "./Hotel";
import InfoCard from "../InfoCard";


const Hotels = ()=>{

    const [hotels,setHotels] = useState({});
    const [hotel,setHotel] = useState();
    const [transelatedWords,lan] = (useTraselator('hotel'))
    const navigate = useNavigate();
    const {id} = useParams()
    
    async function getHotels(id,lan){
        const api = await fetch("https://api.hobitourstravel.com/hotel/"+id+'/'+lan+'/all')
        const res = await api.json();
        if(res.success){
            setHotels(res.data)
            setHotel(res.data[0])
            document.getElementById('h0')?.classList.add("active");
        }
        else
            navigate("/");
        }

        const clear= ()=>{
            for (let index = 0; index < hotels.length; index++) {
                document.getElementById('h'+index)?.classList.remove('active');
                
            }
        }
        const handleClick = (i)=>{
            setHotel(hotels[i]);
            clear();
            document.getElementById('h'+i).classList.add("active");
        }

    useEffect(()=>{
        getHotels(id,lan);
        if (lan === 'ar')
            document.getElementById('hotels').classList.add('rtl')
        else
        document.getElementById('hotels').classList.remove('rtl')
    },[lan])

    return(
        <>
            <div id="hotels" className="container top" style={{minHeight:300}}>
                <div className="d-flex justify-content-center">
                {
                    hotels.length > 0 &&
                    hotels.map((hotel,index) =>{
                        return (
                            <div key={hotel.id}>
                                <button className="btn m-3 btn-lg btn-outline-secondary" id={'h'+index} onClick={()=> handleClick(index)}>{hotel.name}</button>
                            </div>
                            )
                        })
                    }
                    </div>
                    {hotel !== undefined ? <Hotel hotel={hotel}/>:<><h2 className="text-danger text-center card p-2 m-3"><i className="bi bi-exclamation-triangle h1"></i>{transelatedWords.p4}</h2><InfoCard /></>}
            </div>
        </>
    )
}

export default Hotels;