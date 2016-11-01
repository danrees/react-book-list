import React from 'react';
import books from '../data/books';
import Author from './Author';

export default class Book extends React.Component {
  render() {
    return (
      <div id="booksList">
        <ul>
        {books.map(b => {
          return <li>{b.title}
            <Author {... b.author} />
          </li>
        })}
        </ul>
      </div>
    );
  }
}
