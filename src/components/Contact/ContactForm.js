import { useEffect, useState } from 'react';

import { Bars } from 'react-loader-spinner'
import Swal from 'sweetalert2'
import useTraselator from '../../Hooks/useTranselaor';

export default function ContactForm (){

    const [loading,setLoading] = useState(false);

    const postComment =async (data)=>{
        try{
            await fetch("https://api.hobitourstravel.com/contact/add",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                },
                body:JSON.stringify(data),
            })
            .then(async (res)=> await res.json())
            .then((data)=>{
                
                console.log(data)
                if (data.success){
                    Swal.fire({
                        title: "Thank you!",
                        text: "Message Sent Successfully!",
                        icon: "success"
                    });
                }
                else (
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    })
                )
            })
        }
        catch(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            })
        }
        finally{
            setLoading(false)
        }
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries())
        await postComment(data)
        event.target.reset();
        return;
    }

    const [transelatedWords,lan] = (useTraselator('contactForm'))
    
    useEffect(()=>{
        if (lan === 'ar'){
            document.getElementById('ContactForm').classList.add('rtl')
            document.querySelectorAll("label").forEach((item)=>{item.style.left="75%";item.style.right=0;})
        }
        else{
            document.getElementById('ContactForm').classList.remove('rtl')
            document.querySelectorAll("label").forEach((item)=>{item.style.left=0;item.style.right="";})
        }
    },[lan])
    
    return(
        <>
        <div id="ContactForm" className="col-lg-8 pos">
        <form method="post" onSubmit={handleSubmit}  >
            {loading && 
                <div className='over'>
                    <Bars
                        height="80"
                        width="80"
                        color="#eaa157"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />
                </div>
            }
            <div className="form-floating mb-3 text-center">
                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">{transelatedWords.p1}</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" name='name' placeholder="name@example.com" required />
                <label htmlFor="floatingInput">{transelatedWords.p2}</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="subject" name='subject' placeholder="name@example.com" />
                <label htmlFor="floatingInput">{transelatedWords.p3}</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="Message" name='message' style={{height: 200}} required></textarea>
                <label htmlFor="floatingTextarea2">{transelatedWords.p4}</label>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto my-3">
                <button className="btn" style={{color:'white',backgroundColor:"#eaa157"}} type="submit">{transelatedWords.p5}</button>
            </div>
        </form>
        </div>
        </>
    )
}