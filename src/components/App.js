import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import Header from './Header';
import Filters from './Filters';
import SceneList from './SceneList';
import MovieDetail from './SceneDetail';
function App() {
  const [data, setData] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [yearSelected, setYearSelected] = useState('All');
  useEffect(() => {
    callToApi().then((response) => setData(response));
  }, []);

  // Recogemos y guardamos el valor del input para filtrar las peliculas
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  // Funcion que comprueba si los years se repiten
  const getYears = () => {
    const movieYears = data.map((item) => item.year);
    const dataUniqueYear = new Set(movieYears);
    let uniqueYear = [...dataUniqueYear];

    // Ordeno el array
    const arraySorted = uniqueYear.sort();
    return arraySorted;
  };

  // Recogemos y guardamos el valor del select
  const handleFilterYear = (value) => {
    setYearSelected(value);
  };
  const ResetButton = () => {
    setFilterMovie('');
    setYearSelected('All');
  };
  // Filtro segun los parametros del usuario
  const scenesFilter = data
    .filter((scene) =>
      scene.movie.toLowerCase().includes(filterMovie.toLowerCase())
        ? true
        : false
    )
    .filter((scene) => {
      return yearSelected === 'All'
        ? true
        : scene.year === parseInt(yearSelected);
    });

  // Ordeno el array
  const arraySorted = scenesFilter.sort((a, b) => {
    const movieA = a.movie.toUpperCase();
    const movieB = b.movie.toUpperCase();
    if (movieA < movieB) {
      return -1;
    }
    if (movieA > movieB) {
      return 1;
    }
    return 0;
  });

  //buscar cual es la peli que quiero mostrar en detalle
  const { pathname } = useLocation(); // Obtengo la ruta de la aplicacion
  const dataPath = matchPath('/movie/:id', pathname); //busco si coincide con la ruta dinámica
  const movieId = dataPath !== null ? dataPath.params.id : null; //buscando el id del personaje

  const movieFound = data.find((movie) => movie.id === parseInt(movieId));
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  filterMovie={filterMovie}
                  yearSelected={yearSelected}
                  resetButton={ResetButton}
                  years={getYears()}
                />
                <SceneList data={arraySorted} />
              </>
            }
          />

          <Route
            path="/movie/:id"
            element={<MovieDetail movie={movieFound} />}
          />
        </Routes>
      </main>
    </>
  );
}

export { App };
