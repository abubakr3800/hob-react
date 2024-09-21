import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Navbar:{
        Home: "Home",
        Chisiamo:"Chi siamo",
        Servizi:"Servizi",
        Destinazioni:"Destinazioni",
        Proposte:"Proposte",
        Contatti:"Contatti",
        Lingua:"Lingua"
    },
    Carousel:{
        Benvenuti :"Benvenuti in",
        Hobitours :"Hobitours"
    },
    About:{
        Chisiamo :"CHI SIAMO",
        p1:"Amanti dei viaggi, impiegati nel turismo e ovviamente appassionati di Egitto!",
        p2:"Abbiamo fatto della nostra passione, il nostro lavoro.",
        p3:"A noi piace sognare e il viaggio e' uno dei sogni piu' belli...Vogliamo aiutarvi a realizzare il vostro sogno, organizzando al meglio il vostro viaggio e facendovi vivere la migliore esperienza in questa terra dai forti contrasti tra tradizione e modernita', dove il sorriso vi accogliera' ed il divertimento e' assicurato.",
        p4:"L'Egitto e' il Paese delle forti emozioni che rimarranno per sempre nei vostri cuori!"
    },
    offersTitle:{
        title:"LE NOSTRE PROPOSTE",
        p1:"Per",
        p2:" Giorni & ",
        p3:" Notte",
        p4:" Notti"
    },
    services:{
        title:"SERVIZI",
        p1:"Trasferimenti per aeroporto",
        p2:"& da aeroporto",
        p3:"Hotels",
        p4:"& Resorts",
        p5:"Escursioni",
        p6:"Crociere sul Nilo",
        p7:"City breaks",
        p8:"Safari"
    },
    contactTitle:"Contatti",
    contactCard:{
        p1:"I Nostri Contatti",
        p2:"Non esitate a contattarci. Siamo felici di ricevere le vostre richieste.",
        p3:"Email:",
        p4:"Telefono:",
        p5:"Whatsapp:",
        p6:"Facebook:",
        p7:"Instagram:"
    },
    contactForm:{
        p1:"Email",
        p2:"Nome",
        p3:"Soggetto",
        p4:"Messaggio",
        p5:"Inviare"
    },
    info:"Per informazioni e prenotazioni ci potete contattare :",
    offer:{
        p1:"Per",
        p2:" Giorni & ",
        p3:" Notte",
        p4:" Notti",
        p5:"Dettagli della proposta :",
        p6:"Immagini non trovate !"
    },
    destination:{
        p1:"Dettagli della destinazione :",
        p2:"Da non perdere :",
        p3:"Immagini non trovate !",
        p4:"Guarda i nostri hotel"
    },
    hotel:{
        p1:"Dettagli dell'hotel :",
        p2:"Ritorna alla destinazione",
        p3:"Immagini non trovate !",
        p4:"Non abbiamo ancora hotel lì !"
    }
}

export const itSlice = createSlice({
    name : 'it',
    initialState,
    reducers:{
    }
})


export default itSlice.reducer