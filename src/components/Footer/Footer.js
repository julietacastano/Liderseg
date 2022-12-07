import './Footer.css'
import logoSnn from './assets/LogoSSN.png'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () =>{
    return(
        <footer className='footer'>
            <div className="footerSec">
                <div className="footerSecSsn">
                    <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank" rel="noreferrer"><img src={logoSnn} alt='logo' className='logoSsn' /></a>
                    <h6 className='blockquote-footer'>Persona fisica - Matricula: 45296</h6>
                </div>
                <div className="footerSecRedes">
                    <a href="https://www.linkedin.com/company/liderseg-srl/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
                    <a href="https://www.instagram.com/lidersegar/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl"/></a>
                    <HashLink to={'/#contacto'}><FontAwesomeIcon icon={faEnvelope} size="2xl" /></HashLink>
                    <a href="https://api.whatsapp.com/send?phone=541150075006" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2xl"/></a>
                </div> 
            </div>
        </footer>
    )
}

export default Footer