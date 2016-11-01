import React from 'react';
import books from '../data/books';
import Book from './Book';

export default class BookList extends React.Component {
  render() {
    return (
      <div id="booksList">
        {books.map(b => {
          return <Book {... b} />
        })}
      </div>
    );
  }
};
