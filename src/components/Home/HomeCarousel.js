import { useEffect } from 'react'
import useTraselator from '../../Hooks/useTranselaor'

import img1 from '../../Images/carousel/1676131.jpg'
import img2 from '../../Images/carousel/1676137.jpg'
import img3 from '../../Images/carousel/1676157.jpg'
import img4 from '../../Images/carousel/Egyptian.jpg'
import img5 from '../../Images/carousel/HD-Egyptian-Pictures.jpg'
import img6 from '../../Images/carousel/nile.jpg'
import img7 from '../../Images/carousel/wadi-rum.jpg'

var intervalId;

function Slide(images){
    var i =0;
    intervalId = setInterval(()=>{
            document.getElementById(images[i].split('/')[3]).classList.remove('active');
            document.getElementById(images[i].split('/')[3]).classList.remove('d-flex');
            
            i++;
            if (i===images.length)
                i=0;
            document.getElementById(images[i].split('/')[3]).classList.add('active');
            document.getElementById(images[i].split('/')[3]).classList.add('d-flex');
    },5000)
}

export default function HomeCarousel (){

    const [transelatedWords,lan] = (useTraselator('Carousel'))
    const images = [img1,img2,img3,img4,img5,img6,img7];
    
    useEffect(()=>{
        Slide(images);
        if (lan === 'ar')
            document.getElementById('carouselExampleSlidesOnly').classList.add('rtl')
        else
        document.getElementById('carouselExampleSlidesOnly').classList.remove('rtl')
        document.getElementById(images[0].split('/')[3]).classList.add('active');
        document.getElementById(images[0].split('/')[3]).classList.add('d-flex');

        return()=>{
            clearInterval(intervalId)
        }
    },[lan])

    return(
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide top" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((img)=>{ 
                    return (
                    <div className="carousel-item hero-fullscreen align-items-center" key={img.split('/')[3]} id = {img.split('/')[3]}
                    style={{background:"url("+img+')',backgroundSize:100+'% '+100+'%',height:750}}>
                        <div className="bg-wh-tr p-5 container d-flex flex-column align-items-center position-relative py-5">
                            <h1>{transelatedWords.Benvenuti}  <span style={{color:"#0a3454"}}>{transelatedWords.Hobitours}</span></h1>
                        </div>
                    </div>
                )})}
            </div>
        </div>
        </>
    )
}