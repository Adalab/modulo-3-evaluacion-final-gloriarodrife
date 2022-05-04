import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export { App };
