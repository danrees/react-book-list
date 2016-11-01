import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

window.onload = () => {
  ReactDOM.render(<BookList />, document.getElementById('main'));
};
