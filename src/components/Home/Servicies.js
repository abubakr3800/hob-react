import { useEffect } from 'react'
import useTraselator from '../../Hooks/useTranselaor'
import img from '../../Images/LogoMin.png'

import transform from '../../Images/services/transform.jpg'
import transform2 from '../../Images/services/transform2.jpg'
import safari from '../../Images/services/safari.jpg'
import safari2 from '../../Images/services/safari2.jpg'
import Excursion from '../../Images/services/Excursion.jpg'
import Excursions from '../../Images/services/Excursions.jpg'
import hotel from '../../Images/services/hotel.jpg'
import resort from '../../Images/services/resort.jpg'
import cruises from '../../Images/services/Nilecruises.jpg'
import cruises2 from '../../Images/services/Nilecruises2.jpg'
import breaks from '../../Images/services/breaks.jpg'
import breaks2 from '../../Images/services/breaks2.jpg'

export default function Servicies (){
    
  const [transelatedWords,lan] = (useTraselator('services'))
    
  useEffect(()=>{
      if (lan === 'ar')
          document.getElementById('Service').classList.add('rtl')
      else
      document.getElementById('Service').classList.remove('rtl')
  },[lan])

    return(
        <>
                <div className="text-center m-3">
                    <h1 id='servicies' className='title' style={{color:'#485664'}}>{transelatedWords.title}</h1>
                </div>
            <div className="row g-0 justify-content-center m-2" id="Service" style={{position: "relative",height: 'auto'}}>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front" style={{background: 'url('+transform || img+')'}}>
                                <p id="trans1">{transelatedWords.p1}</p>
                            </div>
                            <div className="flip-card-back" style={{background: 'url('+transform2 || img+')'}}>
                                <div className="link text-light">
                                    <p id="trans2">{transelatedWords.p2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front" style={{background: 'url('+hotel || img+')'}}>
                    <p id="hot">{transelatedWords.p3}</p>
                  </div>
                  <div className="flip-card-back" style={{background: 'url('+resort || img+')'}}>
                    <div className="link text-light">
                      <p id="res">{transelatedWords.p4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front" style={{background: 'url('+Excursion || img+')'}}>
                    <p id="esc">{transelatedWords.p5}</p>
                  </div>
                  <div className="flip-card-back" style={{background: 'url('+Excursions || img+')'}}>
                    <div className="link text-light">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front" style={{background: 'url('+cruises || img+')'}}>
                    <p id="nle">{transelatedWords.p6}</p>
                  </div>
                  <div className="flip-card-back" style={{background: 'url('+cruises2 || img+')'}}>
                    <div className="link text-light">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front" style={{background: 'url('+breaks || img+')'}}>
                    <p id="cty">{transelatedWords.p7}</p>
                  </div>
                  <div className="flip-card-back" style={{background: 'url('+breaks2 || img+')'}}>
                    <div className="link text-light">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front" style={{background: 'url('+safari || img+')'}}>
                    <p id="saf">{transelatedWords.p8}</p>
                  </div>
                  <div className="flip-card-back" style={{background: 'url('+safari2 || img+')'}}>
                    <div className="link text-light">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}