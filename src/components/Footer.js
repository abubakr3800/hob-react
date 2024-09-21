import { HashLink } from 'react-router-hash-link';

import img from '../Images/LogoMin.png'
import Swal from 'sweetalert2';

export default function Footer(){

    return(
        <>
        <div className='mt-4' style={{backgroundColor:"#3a4753"}}>
        <div className="container" >
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                <div className="col-md-5 d-flex align-items-center">
                    <HashLink to="/#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img style={{width:80,height:70}} src={img} alt='Hobitours'/>
                    </HashLink>
                    <div>
                    <p className="mb-3 mb-md-0 text-light">© Copyright Hobitours Travel. All Rights Reserved</p>
                    <span className="mb-3 mb-md-0 text-light btn" onClick={()=>
                        Swal.fire({
                        title: "Our Developers",
                        html: `<p>Elkhiouty : <a className='link' href='mailto:elkiouty@hotmail.com'>elkiouty@hotmail.com</a></p>
                                <p>Abu Bakr : <a className='link' href='mailto:ahmedabubakr148@gmail.com'>ahmedabubakr148@gmail.com</a></p>`,
                        icon: "info"
                    })}> See Our Developers</span>
                    </div>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.instagram.com/hobitourstravelegypt?igsh=YWJxenF3YjFzOWsx">
                            <i className="bi bi-instagram text-light h4"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.facebook.com/profile.php?id=61553373603287">
                            <i className="bi bi-facebook text-light h4"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
        </div>
        </>
    )
}