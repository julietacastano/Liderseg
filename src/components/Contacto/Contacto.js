import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contacto = () =>{
    const SendEmail = (e) =>{
            e.preventDefault();

            emailjs.sendForm('service_rc0v7wg', 'template_xl0u2xc', e.target, 'CmPpOKhVDbSFCLcGM')
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
            <div className="formulario" id="contacto">
                <h3>Estamos para ayudarte</h3>
                <h5>Dejanos saber si tenes alguna duda o si necesitas mas información</h5>
                <form className="row justify-content-center" onSubmit={SendEmail}>
                    <div className="formItem col-lg-10 col-sm-10">
                        <input type="text" className="form-control" name='nombreApellido' placeholder="Nombre y apellido" required />
                    </div>
                    <div className="formItem col-lg-5 col-sm-10">
                        <input type="tel" className="form-control" name='telefono' placeholder="Telefono" />
                    </div>
                    <div className="formItem col-lg-5 col-sm-10">
                        <input type="email" className="form-control" name='email' placeholder="Email" required />
                    </div>
                    <div className="formItem col-lg-10 col-sm-10 mx-auto">
                    <input type="text" className="form-control" name='asunto' placeholder="Asunto" required/>
                    </div>
                    <div className="formItem col-lg-10 col-sm-10 mx-auto">
                        <textarea cols="30" rows="10" className="form-control" name='mensaje' placeholder="Mensaje" required></textarea>                
                    </div>
                    <div className="col-3 mx-auto">
                        <button type="submit" className="btn btn-light">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto