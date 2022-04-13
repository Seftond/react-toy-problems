import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor(){
        super();
        this.state = {
            employees: [{
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
              },
              {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
              },
              {
                name: 'Carly Armstrong',
                title: 'CEO',
              }
            ],
            userInput: "",
            filteredArray: []
        }
    }


    handleInput(inputValue){
        this.setState({userInput: inputValue});
    }

    filterArray(userInput){
        let employees = this.state.employees;
        let filteredArr = [];

        for(let i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(userInput)){
                filteredArr.push(employees[i])
            }
        }
        this.setState({filteredArray: filteredArr})

    }
  render() {
    return (
        <div className="puzzleBox filterObjectPB" >
        <h4>Filter Object</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.employees, null, 10)}</span>
        <input className="inputLine" onChange={(e) => this.handleInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Button</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
    </div>
    )
  }
}
