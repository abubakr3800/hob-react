import { useEffect } from "react"
import useTraselator from "../../Hooks/useTranselaor"

export default function ContactCard() {

    const [transelatedWords,lan] = (useTraselator('contactCard'))
    
    useEffect(()=>{
        if (lan === 'ar')
            document.getElementById('info').classList.add('rtl')
        else
        document.getElementById('info').classList.remove('rtl')
    },[lan])
    return(
        <>
        <div className="col-lg-4 mb-2">
            <div className="card  p-5 pb-3 shadow" id="info">
            <h3 >{transelatedWords.p1}</h3>
            <p className="text-secondary">{transelatedWords.p2}</p>
            <div className="info-item d-flex">
                <i className="bi bi-envelope icon mx-2"></i>
                <div>
                <h4>{transelatedWords.p3}</h4>
                <a className="link" href="mailto:info@hobitourstravel.com">info@hobitourstravel.com</a>
                </div>
            </div>
            <br />
            <div className="info-item d-flex">
                <i className="bi bi-phone icon mx-2"></i>
                <div >
                <h4>{transelatedWords.p4}</h4>
                <div style={{direction:"ltr"}}>
                <a className="link"href="tel:+393343226221">+39 334 322 6221</a>
                </div>
                </div>
            </div>
            <br />
            <div className="info-item d-flex">
                <i className="bi bi-whatsapp icon mx-2"></i>
                <div>
                <h4>{transelatedWords.p5}</h4>
                <div style={{direction:"ltr"}}>
                <a className="link" href="https://wa.me/+201017626008">+20 101 762 6008</a>
                </div>
                </div>
            </div>
            <br />
            <div className="info-item d-flex">
                <i className="bi bi-facebook icon mx-2"></i>
                <div>
                <h4>{transelatedWords.p6}</h4>
                <a className="link"href="https://www.facebook.com/profile.php?id=61553373603287">Hobitours Travel Egypt</a>
                </div>
            </div>
            <br />
            <div className="info-item d-flex">
                <i className="bi bi-instagram icon mx-2"></i>
                <div>
                <h4>{transelatedWords.p7}</h4>
                <a className="link"href="https://www.instagram.com/hobitourstravelegypt?igsh=YWJxenF3YjFzOWsx">hobitourstravelegypt</a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}