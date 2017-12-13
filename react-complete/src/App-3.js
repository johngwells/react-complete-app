import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was Click');
    // this.state.persons[0].name = 'Maxmillion' DO NOT DO THIS
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    });
  }

  // using this syntax when using this
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>HI!</h1>
        <p>goodbye</p>
        <p>really</p>
        {/* 2 syntax versions below. first is more efficient, use second on certain cases */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maxmillion')}>Switch Name</button> */}
        <button
          style={style}
          // onClick={() => this.switchNameHandler('Maxmillion')}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Max!!!')}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>
              Loves Anime!
        </Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
