import { useEffect } from "react"
import useTraselator from "../Hooks/useTranselaor"
import img from "../Images/LogoMin.png"

export default function InfoCard(){

    const [transelatedWords,lan] = (useTraselator('info'))
    
    useEffect(()=>{
        if (lan === 'ar')
            document.getElementById('info').classList.add('rtl')
        else
        document.getElementById('info').classList.remove('rtl')
    },[lan])

    return(
        <>
        <div className="row px-3 py-1 mt-4 border border-1 rounded shadow" id="info">
            <div className="col col-lg-9">
                <h3 className="my-2" style={{color:"#485664"}}>{transelatedWords.toString()}</h3>
                <div className="container">
                    <div className="row align-items-center">
                        <i className="col-md-auto bi bi-phone icon"></i>
                        <a className="col-md-auto text-decoration-none"  style={{direction:"ltr"}} href="tel:+393343226221">
                            <h5>+39 334 322 6221</h5>
                        </a>
                    </div>
                    <div className="row align-items-center">
                        <i className="col-md-auto bi bi-whatsapp icon"></i>
                        <a className="col-md-auto text-decoration-none" style={{direction:"ltr"}} href="https://wa.me/+201017626008">
                            <h5>+20 101 762 6008</h5>
                        </a>
                    </div>
                    <div className="row align-items-center"> <i className="col-md-auto bi bi-envelope icon"></i> <a className="col-md-auto text-decoration-none" href="mailto:info@hobitourstravel.com"><h5>info@hobitourstravel.com</h5></a></div>
                    <div className="row align-items-center"> <i className="col-md-auto bi bi-facebook icon"></i> <a className="col-md-auto text-decoration-none" href="https://www.facebook.com/profile.php?id=61553373603287"><h5>Hobitours Travel Egypt</h5></a></div>
                    <div className="row align-items-center"> <i className="col-md-auto bi bi-instagram icon"></i> <a className="col-md-auto text-decoration-none" href="https://www.instagram.com/hobitourstravelegypt?igsh=YWJxenF3YjFzOWsx"><h5>hobitourstravelegypt</h5></a></div>
                </div>
            </div>
            <div className="col col-lg-3 h-100 mt-3" >
                <img style={{width:200}} src={img} alt="..."/>
            </div>
        </div>
        </>
    )
}