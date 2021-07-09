import React, { Fragment, useState } from 'react'

const Form = ({ guardarPelicula }) => {

    const [nombreInput, guardarNombreInput] = useState('');

    const buscarPelicula = e => {
        e.preventDefault();
        consultarApi();
    }

    const consultarApi = async () => {
        const api = await fetch(`http://www.omdbapi.com/?apikey=3e09afe3&t=${nombreInput}`, {
            "method": "GET"
        })
        const pelicula = await api.json();
        guardarPelicula(pelicula);
    }

    const eventoInput = e => {
        guardarNombreInput(e.target.value);
    }

    return (
        <Fragment>
            <div className="row mt-4 justify-content-center">
                <div className="col-md-6">
                    <form className="row g-3 justify-content-center" onSubmit={buscarPelicula}>
                        <div className="col-auto">
                            <label htmlFor="pelicula" className="visually-hidden">Busca tu película</label>
                            <input type="text" className="form-control" id="pelicula" value={nombreInput} onChange={eventoInput} required placeholder="Busca tu película" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Form;