import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { italian, english, arabic } from '../rtk/languageSlice'

import logo from '../Images/LogoMin.png'
import italy from '../Images/italy.png'
import egypt from '../Images/egypt.png'
import england from '../Images/england.png'

import useTraselator from '../Hooks/useTranselaor'
import { HashLink } from 'react-router-hash-link';
export default function Navbar()
{

    const dispatch = useDispatch()
    const [transelatedWords,lan] = (useTraselator('Navbar'))
    
    useEffect(()=>{
        if (lan === 'ar')
            document.getElementById('navBar').classList.add('rtl')
        else
        document.getElementById('navBar').classList.remove('rtl')
    },[lan])

    return(
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary h4" id='navBar'>
        <div className="container-fluid">
            <HashLink className="navbar-brand" to="/#">
                <img src={logo} alt="Hobitours" width="100" height="80" />
            </HashLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item mx-2">
                        <HashLink className="nav-link scrollto" aria-current="page" to="/#">{transelatedWords.Home}</HashLink>
                    </li>
                    <li className="nav-item mx-2">
                        <HashLink className="nav-link scrollto" to="/#about">{transelatedWords.Chisiamo}</HashLink>
                    </li>                    
                    <li className="nav-item mx-2">
                        <HashLink className="nav-link scrollto" to="/#servicies">{transelatedWords.Servizi}</HashLink>
                    </li>                    
                    <li className="nav-item mx-2">
                        <HashLink className="nav-link scrollto" to="/#destination">{transelatedWords.Destinazioni}</HashLink>
                    </li>                    
                    <li className="nav-item mx-2">
                        <HashLink className="nav-link scrollto" to="/#offer">{transelatedWords.Proposte}</HashLink>
                    </li>
                    <li className="nav-item mx-2">
                        <HashLink className="nav-link scrollto" to="/contact">{transelatedWords.Contatti}</HashLink>
                    </li>
                    <li className="nav-item dropdown mx-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {transelatedWords.Lingua}
                        </a>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item h5 my-1" onClick={()=>{dispatch(italian())}}> <img className='mx-2' src={italy} alt='Italiano' style={{width:"30px"}}/> Italiano</button></li>
                            <li><button className="dropdown-item h5 my-1" onClick={()=>{dispatch(english())}}> <img className='mx-2' src={england} alt='English' style={{width:"30px"}}/> English</button></li>
                            <li><button className="dropdown-item h5 my-1" onClick={()=>{dispatch(arabic())}}> <img className='mx-2' src={egypt} alt='Arabic' style={{width:"30px"}}/> Arabic   </button></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='row col-lg-1 mx-2'>
            <ul className="nav justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.instagram.com/hobitourstravelegypt?igsh=YWJxenF3YjFzOWsx">
                            <i className="bi bi-instagram text-secondary h5"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.facebook.com/profile.php?id=61553373603287">
                            <i className="bi bi-facebook text-secondary h5"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>)
}