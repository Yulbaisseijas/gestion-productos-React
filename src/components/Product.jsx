import React from 'react';
import '../css/product.css';

const URL_PRODUCT = "http://localhost:3000/api/prod/";

const obtData = async (url) => {
    const answer = await fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    const json = await answer.json();
    console.log(json);
    return (json);
}

const Product = () => {
    //const data = await obtData(URL_PRODUCT);

    return (
        <div className="product">
            <div className="row">
                <div className="col-sm-8 offset-2 mt-5">
                    <div className="card pt-8">
                        <div className="card-header text-center">
                            <i> Productos </i>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Artículo</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Calculadora</td>
                                        <td>Calculadora científica Casio</td>
                                        <td>609f28209c13d92438d28195</td>
                                        <td><button className="btn btn-primary">✏️</button>{"  "}
                                            <button className="btn btn-danger">🗑️</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Colores</td>
                                        <td>Colores de cera Prismacolor</td>
                                        <td>609f27fe9c13d92438d28194</td>
                                        <td><button className="btn btn-primary">✏️</button>{"  "}
                                            <button className="btn btn-danger">🗑️</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product