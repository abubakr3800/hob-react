import { useEffect } from 'react'

import img from '../../Images/LogoMin.png'
import bgImg from '../../Images/bg.png'
import useTraselator from '../../Hooks/useTranselaor'

export default function About (){

    const [transelatedWords,lan] = (useTraselator('About'))
    
    useEffect(()=>{
        if (lan === 'ar')
            document.getElementById('about').classList.add('rtl')
        else
        document.getElementById('about').classList.remove('rtl')
    },[lan])

    return(
        <>
            <div className="card hover shadow m-3 mt-5 p-3" id='about'>
                <div className="row g-0">
                            <div className="section-header text-center shadow my-3 p-1" style={{backgroundColor: '#0a3454'}}>
                                <h1 style={{color: 'white'}}>{transelatedWords.Chisiamo}</h1>
                            </div>
                    <div className="col-md-4 mt-2" style={{background:'url('+bgImg+')'}}>
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-text pt-0 pt-lg-5">{transelatedWords.p1}</h3>
                            <div className="tab-pane fade show active" id="tab1">
                                <div className="d-flex align-items-center mt-4">
                                    <i className="bi bi-check"></i>
                                    <h4>{transelatedWords.p2}</h4>
                                </div>
                                <p>{transelatedWords.p3}</p>
                                <p>{transelatedWords.p4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}