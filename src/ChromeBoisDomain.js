import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => drawChromeBoiAtCoords(event.pageX, event.pageY)

  handleClick = () => toggleCycling()
  
  handleKey = (event) => {
    if (event.charCode === 97){
      resize('+')
    } else if (event.charCode === 115){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
