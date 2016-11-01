import React from 'react';
import Author from './Author';

export default class Book extends React.Component {

  constructor() {
    super();
    this.state = {
      rating: 0
    };
  }
  vote() {
    const currentVotes = this.state.rating;
    console.log("")
    this.setState({rating: currentVotes + 1});
  }

  render() {
    return (
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.title}</h3>
            </div>
            <div className="panel-body">
              <Author {... this.props.author} />
              <div>Rating: {this.state.rating}</div>
              <div>Vote: <button className="btn btn-primary" onClick={() => this.vote()}>Vote</button></div>
            </div>
          </div>
    );
  }
};
