import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Filters from './Filters';
import SceneList from './SceneList';
function App() {
  const [data, setData] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
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
    return uniqueYear;
  };

  const scenesFilter = data.filter((scene) =>
    scene.movie.toLowerCase().includes(filterMovie.toLowerCase()) ? true : false
  );

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

  return (
    <>
      <Header />
      <Filters handleFilterMovie={handleFilterMovie} years={getYears()} />
      <SceneList data={scenesFilter} />
    </>
  );
}

export { App };
