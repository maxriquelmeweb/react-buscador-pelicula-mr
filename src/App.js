import React, { Fragment, useState } from 'react'
import './App.css';
import Form from './components/Form';
import Pelicula from './components/Pelicula';

function App() {
  const [pelicula, guardarPelicula] = useState({});

  return (
    <Fragment>
      <header className="App-header">
        <h2>
          Búsqueda de películas
        </h2>
        <span>Podrás encontrar películas con su detalle, año, y rating. </span>
      </header>
      <div>
        <Form
          guardarPelicula={guardarPelicula}
        />
        <Pelicula
          pelicula={pelicula}
        />
      </div>
    </Fragment>
  );
}

export default App;