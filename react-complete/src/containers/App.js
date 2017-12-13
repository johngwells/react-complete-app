import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside ComponentDidMount()')
  }

  // PureComponent does shouldComponent.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate');
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  // state = {
  //   persons: [
  //     { id: '1', name: 'Max', age: 28 },
  //     { id: '2', name: 'Manu', age: 29 },
  //     { id: '3', name: 'Stephanie', age: 26 }
  //   ]
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // makes a copy of the object
    // ... spread operator distributes all properties of the object we're fetching [personIndex]
    const person = {
      ...this.state.persons[personIndex]
    };

    // now update (mutate the copy) the person name. I can update it now because its a copy (not mutating the original)
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
    const persons = [...this.state.persons] // create a copy of the array
    persons.splice(personIndex, 1); // mutate the copy (not the original)
    this.setState({ persons: persons }); // assigned the copy to a new state
  }

  // using this syntax when using this
  togglePersonsHandler = () => {
    // when your new state depends on the old state. Safe way below
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
      {/*<div className={classes.App}>*/}
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      {/*</div>*/}
      </WithClass>
    );
  }
}

export default App;
