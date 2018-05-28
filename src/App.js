import React from 'react';
import ElementParser from './ElementParser';

export default class Renderer extends React.Component {
  state = {
    contents: require('./content.json')
  };

  render() {
    return this.state.contents
      .reduce((acc, el) => !!el.elements ? acc.concat(el.elements[0]) : acc, [])
      .map((el, idx) => ElementParser.createElement(el, idx));
  }
}