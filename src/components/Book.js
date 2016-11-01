import React from 'react';
import books from '../data/books';
import Author from './Author';

export default class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    };
  };
  render() {
    return (
      <div id="booksList">
        <div class="panel panel-default">
        {books.map(b => {
          return <div className="panel panel-primary">
            <div className="panel-heading"><h3 className="panel-title">{b.title}</h3></div>
            <div className="panel-body"><Author {... b.author} /></div>
          </div>
        })}
        </div>

      </div>
    );
  }
}
