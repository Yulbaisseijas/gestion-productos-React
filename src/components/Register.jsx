import React, { useRef, useState } from 'react';
import '../css/register.css';

const URL_REGISTER = "http://localhost:3000/api/users/addNewUser";

const sendData = async (url, data) => {
    const answer = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });
    // console.log(answer);
    const json = await answer.json();
    console.log(json);
    return (json);
}

const Register = (props) => {
    const [wait, setWait] = useState(false); //Para bloquear el boton de aceptar

    const refFirstName = useRef(null);
    const refLastName = useRef(null);
    const refEmail = useRef(null);
    const refPassword = useRef(null);


    const handleRegister = async () => {
        setWait(true);
        const data = {
            "firstName": refFirstName.current.value,
            "lastName": refLastName.current.value,
            "email": refEmail.current.value,
            "password": refPassword.current.value
        }

        console.log(data);
        const answerJson = await sendData(URL_REGISTER, data);
        console.log("Respuesta desde el HandleLogin", answerJson);
        setWait(false);
    }

    return (
        <div className="register">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <i> Registro de Usuario </i>
                        </div>
                        <div className="card-body">

                        <div className="input-group input-group-sm mb-3">
                                <input 
                                    type="text" 
                                    placeholder="Nombre"
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm"
                                    ref={refFirstName} 
                                />
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <input 
                                    type="text" 
                                    placeholder="Apellido"
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm"
                                    ref={refLastName}
                                 />
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <input 
                                    type="email" 
                                    placeholder="Correo"
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    ref={refEmail}
                                />
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <input 
                                    type="password" 
                                    placeholder="Contraseña"
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    ref={refPassword}
                                />
                            </div>

                        </div>
                        <button onClick={handleRegister} disabled={wait} className="btn btn-info"> Aceptar </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register