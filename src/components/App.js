import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Filters from './Filters';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => setData(response));
  }, []);

  return (
    <>
      <Header />
      <Filters />
    </>
  );
}

export { App };
