import React, { Component } from 'react'

export default class Sum extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    addNumbers(num1, num2){
        this.setState({ sum: num1 + num2 });
    }
  render() {
    return (
        <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e) => this.setState({ number1: parseInt(e.target.value, 10) }) }></input>
        <input className="inputLine" onChange={ (e) => this.setState({ number2: parseInt(e.target.value, 10) }) }></input>
        <button className="confirmationButton" onClick={ () => this.addNumbers(this.state.number1, this.state.number2) }>Button</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
    </div>
    )
  }
}
