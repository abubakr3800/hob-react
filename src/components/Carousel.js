import { useEffect } from 'react'

var intervalId;

function Slide(images){
    var i =0;
    intervalId = setInterval(()=>{
            document.getElementById(images[i].id).classList.remove('active');
            document.getElementById(images[i].id).classList.remove('d-flex');
            
            i++;
            if (i===images.length)
                i=0;
            document.getElementById(images[i].id).classList.add('active');
            document.getElementById(images[i].id).classList.add('d-flex');
    },5000)
}


export default function Carousel(props){
    const {images} = props

    useEffect(()=>{
        Slide(images);
        
        document.getElementById(images[0].id).classList.add('active');
        document.getElementById(images[0].id).classList.add('d-flex');
        
        return()=>{
            clearInterval(intervalId)
        }
    },[])

    return(
        <>
        <div className="carousel slide" data-bs-interval="1000">
            <div className="carousel-inner rounded">
                {images.map((img)=>{ 
                    return (
                    <div className="carousel-item" key={img.id} id = {img.id}>
                        <img src={img.images} alt="..." style={{height:500,width:"100%"}}/>
                    </div>
                )})}
            </div>
        </div>
        </>
    )
}