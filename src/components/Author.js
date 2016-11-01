import React from 'react';
import ReactDOM from 'react-dom';

export default class Author extends React.Component{
  render() {
    return (
      <div className="author">
        <dl>
          <dt>Author: {this.props.name}</dt>
          <dd>Wikipedia link: <a href="{this.props.bioLink}">{this.props.bioLink}</a></dd>
        </dl>
      </div>
    );
  }
}
