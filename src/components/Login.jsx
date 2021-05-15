import React, { useRef, useState } from 'react';
import '../css/login.css';

const URL_LOGIN = "http://localhost:3000/api/users/";

const sendData = async(url, data) => {
    const answer = await fetch(url, {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });
    const json = await answer.json();
    console.log(json);
    return(json);
}

const Login = (props) => {
    const [error, setError] = useState(null); //Para el manejo de error cuando no se logee
    const [wait, setWait] = useState(false); //Para bloquear el boton de aceptar

    const refEmail = useRef(null);
    const refPassword = useRef(null);

    const handleLogin = async() => {
        setWait(true);
        const data = {
            "email" : refEmail.current.value,
            "password" : refPassword.current.value
        }

        console.log(data);
        const answerJson = await sendData(URL_LOGIN, data);
        console.log("Respuesta desde el HandleLogin", answerJson);
        
        props.access(answerJson.loggedIn);
        setWait(false);
    }

    const handleRegister = () => {
        props.openReg(true);
    }

    return (
        <div className="login">
            <div className="row">
                <button onClick={handleRegister} className="btn btn-warning"> Register </button>
                
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h6> Ingresar </h6>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">✉️</span>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="correo" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1" 
                                    ref={refEmail}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">🔒</span>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="contraseña" 
                                    aria-label="contraseña" 
                                    aria-describedby="basic-addon2"
                                    ref={refPassword} 
                                />
                            </div>

                        </div>
                        <button onClick={handleLogin} disabled={wait} className="btn btn-info"> Aceptar </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login