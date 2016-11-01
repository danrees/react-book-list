import React from 'react';
import ReactDOM from 'react-dom';
import Book from './components/Book';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

window.onload = () => {
  ReactDOM.render(<Book />, document.getElementById('main'));
};
