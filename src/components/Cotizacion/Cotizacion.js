import './Cotizacion.css'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Cotizacion = () =>{

    const SendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_rc0v7wg', 'template_4lfr4wh', e.target, 'CmPpOKhVDbSFCLcGM')
            .then(() => {
                swal("Pedido de cotización enviado!", "Nos contactaremos a la brevedad", "success");
            }, (error) => {
                swal("Error", "Estamos trabajando para solucionar el problema", "error");
                console.log(error.text);
            });
            e.target.reset()
    } 

    return (
        <div>
            <div className="tituliLinea"> <h4 className='titulo'>FORMULARIO DE COTIZACIÓN</h4></div>
            <div className="formulario">
                <form className="row justify-content-center" onSubmit={SendEmail}>
                    <div className="formItem col-lg-5 col-sm-10">
                        <input type="text" className="form-control" name='nombreApellido' placeholder="Nombre y apellido" required />
                    </div>
                    <div className="formItem col-lg-3 col-sm-5">
                        <input type="text" className="form-control" name='DNI' placeholder="DNI/CUIT" />
                    </div>
                    <div className="formItem col-lg-2 col-sm-5">
                        <input type="number" className="form-control" name='codigoPostal' placeholder="Código postal" required />
                    </div>
                    <div className="formItem col-lg-5 col-sm-10">
                        <input type="tel" className="form-control" name='telefono' placeholder="Telefono" />
                    </div>
                    <div className="formItem col-lg-5 col-sm-10">
                        <input type="email" className="form-control" name='email' placeholder="Email" required />
                    </div>
                    <div className="aclaracion col-lg-10 col-sm-10">
                        <p>*Por favor recordar brindar los datos del bien a cotizar:</p>
                        <p>Para autos modelo completo y año de fabricación. </p>
                        <p>Para un inmuble informar metros cuadrados cubiertos y en caso de realizar una actividad comercial, informar actividad a cubrir</p>
                    </div>            
                    <div className="formItem col-lg-10 col-sm-10 mx-auto">
                        <textarea cols="30" rows="10" className="form-control" name='mensaje' placeholder="Mensaje"></textarea>                
                    </div>
                    <div>
                        <button type="submit" className="btn btn-light">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cotizacion