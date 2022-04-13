import React, { Component } from 'react'

export default class EvenAndOdd extends Component {

    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        };
    };

    handleInput(inputValue){
        this.setState({userInput: inputValue});
    };

    sortEvensAndOdds(userInput){
        let arr = userInput.split(',');
        let evensArr = [];
        let oddsArr = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evensArr.push(parseInt(arr[i], 10))
            }else {
                oddsArr.push(parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: evensArr, oddArray: oddsArr})
    }


  render() {
    return (
      <div className="puzzleBox evenAndOddPB" >
          <h4>Evens and Odds</h4>
          <input className="inputLine" onChange={(e) => this.handleInput(e.target.value)}></input>
          <button className="confirmationButton" onClick={() => this.sortEvensAndOdds(this.state.userInput)}>Button</button>
          <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
          <span className="resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}
