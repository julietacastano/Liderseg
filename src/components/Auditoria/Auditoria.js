import './Auditoria.css'
import { Link } from 'react-router-dom'

const Auditoria = () =>{
    return (
        <div className="auditoria">
            <div className='tituliLinea'>
                <h4 className='titulo'>AUDITORIA DE RIESGO</h4>
            </div>    
            <div className="auditoriaText row justify-content-center align-items-center">
                <div className="col-lg-8 col-sm-10">
                    <p>Contar con pólizas de seguros no quiere decir que estoy totalmente cubierto. Hay muchos aspectos que deben ser considerados a la hora de contratar los seguros que mejor que se acople a tus necesidades. Por esta razón LIDERSEG, con sus profesionales especializados, ofrece el servicio de auditoria de los riesgos de tu empresa.
                        En nuestra auditoría vas a encontrar: 
                    </p>
                    <ul>
                        <li>Un análisis de las pólizas vigentes</li>
                        <li>Mejoras que sugerimos</li>
                        <li>Polizas y/o coberturas se pueden eliminar, ya sea para mejorar el riesgo o para ahorrar dinero</li>
                        <li>Que riesgos necesitan cubrir y que hoy no tienen.</li>
                    </ul>
                    <p>Una vez finalizado nuestro análisis, podrán evaluar en forma clara y sencilla y con argumentos sólidos, si tus pólizas de seguros cubren lo que pensabas que cubrían, si necesitan cambios o hay que volver a construir tu estructura de seguros en función de las nuevas necesidades.</p>
                </div>
                <aside className="auditoriaAviso col-lg-3 col-sm-10">
                    <p>Toda información brindada por el cliente es de caracter confidencial, solo se utilizará para el análisis pedido</p>
                </aside>
            </div>
            <div>
                <Link to={'/cotizacion'} className='btn btn-success'>PEDÍ TU PRESUPUESTO</Link>
            </div>
        </div>
    )
}

export default Auditoria