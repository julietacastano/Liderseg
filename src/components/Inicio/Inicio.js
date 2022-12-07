import './Inicio.css';
import Contacto from '../Contacto/Contacto';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMonster, faHouse, faBuilding, faFileLines } from '@fortawesome/free-solid-svg-icons'

const Inicio = () =>{

    return (
        <div className='inicio'>
            <div className="row align-items-center justify-items-center">
                <div className="col-lg-3 col-sm-6 cardItem"> 
                    <Link to={'/categoria/agro'} > <FontAwesomeIcon icon={faTruckMonster} size="xl"/> </Link>
                    <Link to={'/categoria/agro'}>Agroindustria</Link>
                </div>
                <div className="col-lg-3 col-sm-6 cardItem">
                    <Link to={'/categoria/paraVos'} > <FontAwesomeIcon icon={faHouse} size="xl" /> </Link>
                    <Link to={'/categoria/paraVos'}>Para vos</Link>
                </div>
                <div className="col-lg-3 col-sm-6 cardItem">
                    <Link to={'/categoria/paraTuEmpresa'} className='icon'> <FontAwesomeIcon icon={faBuilding} size="xl"/> </Link>
                    <Link to={'/categoria/paraTuEmpresa'}>Para tu empresa</Link>
                </div>
                <div className="col-lg-3 col-sm-6 cardItem">
                    <Link to={'/auditoria'} > <FontAwesomeIcon icon={faFileLines} size="xl" /> </Link>
                    <Link to={'/auditoria'}>Auditoría de riesgo</Link>
                </div>
            </div>
            <div className="quienesSomos">
                <h3>QUIENES SOMOS</h3>
                <p>MÁS DE 30 AÑOS ASISTIENDO A CLIENTES Y ASESORES DE SEGUROS</p>
                <p>Asistimos a nuestros clientes para optimizar el manejo de sus seguros a través de una serie de beneficios que incluyen la reducción de tareas administrativas, costos competitivos, selección de aseguradoras sólidas y gestión total de siniestros.</p>
                <p>Contamos con un equipo de gran experiencia que nos permite brindar atención y servicio necesario, a fin de satisfacer las demandas de nuestros clientes.</p>
            </div>
            <Contacto />
        </div>
    )
}

export default Inicio