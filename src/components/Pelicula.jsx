import React, { Fragment } from 'react';

const Pelicula = ({ pelicula }) => {

    let validado = false;
    if (pelicula.Title !== undefined) {
        validado = true;
    }

    return (
        <Fragment>
            {validado
                ?
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-3">
                        <div className="card text-center">
                            <img className="card-img-top pelicula mx-auto" src={pelicula.Poster} alt={pelicula.Title} />
                            <div className="card-body">
                                <h5 className="card-title">{pelicula.Title}, {pelicula.Year}</h5>
                                <p className="card-text">{pelicula.Plot}</p>
                                <p className="card-text">Rating: {pelicula.imdbRating}</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </Fragment>
    );
}

export default Pelicula;