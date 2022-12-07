import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Productores = () =>{

    const SendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_rc0v7wg', 'template_4lfr4wh', e.target, 'CmPpOKhVDbSFCLcGM')
            .then(() => {
                swal("Consulta enviada!", "Nos contactaremos a la brevedad", "success");
            }, (error) => {
                swal("Error", "Estamos trabajando para solucionar el problema", "error");
                console.log(error.text);
            });
            e.target.reset()
    } 


    return (
        <div>
            <div className="tituliLinea"><h4 className='titulo'>SUMATE A NUESTRA RED DE PRODUCTORES</h4></div>
            <div className="formulario">
                <h5>Completa el formulario y nos ponemos en contacto con vos</h5>
                <form className="row justify-content-center" onSubmit={SendEmail}>
                    <div className="formItem col-lg-5 col-sm-10">
                        <input type="text" className="form-control" name='nombreApellido' placeholder="Nombre y Apellido" required />
                    </div>
                    <div className="formItem col-lg-3 col-sm-5">
                        <input type="text" className="form-control" name='CUIT' placeholder="CUIT" />
                    </div>
                    <div className="formItem col-lg-2 col-sm-5">
                        <input type="number" className="form-control" name='matricula' placeholder="Matricula" required />
                    </div>
                    <div className="formItem col-lg-3 col-sm-10">
                        <input type="tel" className="form-control" name='telefono' placeholder="Telefono" />
                    </div>
                    <div className="formItem col-lg-4 col-sm-10">
                        <input type="email" className="form-control" name='email' placeholder="Email" required />
                    </div>
                    <div className="formItem col-lg-3 col-sm-10">
                        <input type="text" className="form-control" name='localidad' placeholder="Localidad" required />
                    </div>
                    <div className="formItem col-lg-10 col-sm-10 mx-auto">
                        <textarea cols="30" rows="10" className="form-control" name='mensaje' placeholder="Mensaje" required></textarea>                
                    </div>
                    <div>
                        <button type="submit" className="btn btn-light">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Productores