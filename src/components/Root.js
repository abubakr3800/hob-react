import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Floatwhatsapp from "./Floatwhatsapp";

const Root = ()=>{

    return(
        <>
        <Navbar />
        <Outlet />
        <Floatwhatsapp />
        <Footer />
        </>
    )
}

export default Root;