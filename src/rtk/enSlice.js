import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Navbar:{
        Home: "Home",
        Chisiamo:"About Us",
        Servizi:"Services",
        Destinazioni:"Destenations",
        Proposte:"Proposal",
        Contatti:"Contact",
        Lingua:"Language"
        },
    Carousel:{
        Benvenuti :"Welcome to",
        Hobitours :"Hobitours"
    },
    About:{
        Chisiamo :"ABOUT US",
        p1:"Travel lovers, tourism employees and of course Egypt enthusiasts!",
        p2:"We have made our passion, our job.",
        p3:"We like to dream and travel is one of the most beautiful dreams... We want to help you make your dream come true, organizing your trip in the best possible way and making you live the best experience in this land of strong contrasts between tradition and modernity, where a smile will welcome you and fun is guaranteed.We like to dream and travel is one of the most beautiful dreams... We want to help you make your dream come true, organizing your trip in the best possible way and making you live the best experience in this land of strong contrasts between tradition and modernity, where a smile will welcome you and fun is guaranteed.",
        p4:"Egypt is the country of strong emotions that will remain forever in your hearts!"
    },
    offersTitle:{
        title:"DISCOVER OUR OFFERS",
        p1:"For",
        p2:" Days & ",
        p3:" Night",
        p4:" Nights"
    },
    services:{
        title:"SERVICES",
        p1:"Transfers to the airport",
        p2:"& from the airport",
        p3:"Hotels",
        p4:"& Resorts",
        p5:"Excursions",
        p6:"Nile Cruises",
        p7:"City breaks",
        p8:"Safari"
    },
    contactTitle:"Contact Us",
    contactCard:{
        p1:"Our Contacts",
        p2:"Please contact us. We are happy to receive your inquiries.",
        p3:"Email:",
        p4:"Phone:",
        p5:"Whatsapp:",
        p6:"Facebook:",
        p7:"Instagram:"
    },
    contactForm:{
        p1:"Email",
        p2:"Name",
        p3:"Subject",
        p4:"Message",
        p5:"Send"
    },
    info:"For information and reservations you can contact us on :",
    offer:{
        p1:"For",
        p2:" Days & ",
        p3:" Night",
        p4:" Nights",
        p5:"Proposal Details :",
        p6:"Images Not Found !"
    },
    destination:{
        p1:"Destination Details :",
        p2:"Not to be missed :",
        p3:"Images Not Found !",
        p4:"See Our Hotels There"
    },
    hotel:{
        p1:"Hotel Details :",
        p2:"Return to the destination",
        p3:"Images Not Found !",
        p4:"We don't have hotels there yet !"
    }
}

export const enSlice = createSlice({
    name : 'en',
    initialState,
    reducers:{
    }
})


export default enSlice.reducer