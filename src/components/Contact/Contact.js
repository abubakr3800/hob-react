import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import useTraselator from "../../Hooks/useTranselaor";

export default function Contact (){

    const [transelatedWords,] = (useTraselator('contactTitle'))
    
    return(
        <>
        <div className="container">
        <div className="top text-center p-4 mb-3">
            <h1>{transelatedWords.toString()}</h1>
        </div >
        <div className="row gy-5 gx-lg-5">
            <ContactCard />
            <ContactForm />
        </div>
        </div>
        </>
    )
}