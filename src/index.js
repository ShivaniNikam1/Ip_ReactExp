import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Main />);

