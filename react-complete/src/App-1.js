import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ]
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // makes a copy of the object
    // ... spread operator distributes all properties of the object we're fetching [personIndex]
    const person = {
      ...this.state.persons[personIndex]
    };

    // now update the person name. I can update it now because its a copy (not mutating)
    person.name = event.target.value;

    // now update from the copy person object
    const persons = [...this.state.persons];
    // update the one element
    persons[personIndex] = person;

    // set the state to updated person from the updated one element
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // ... is a spread operator 1st or 2nd line can be used
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  // using this syntax when using this
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    // css
    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>HI!</h1>
        <p className={assignedClasses.join(' ')}>goodbye</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
