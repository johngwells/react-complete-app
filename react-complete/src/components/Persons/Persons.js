import React, { PureComponent } from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log( '[Persons.js] Inside Constructor', props );
  }

  componentWillMount() {
    console.log( '[Persons.js] Inside componentWillMount()' );
  }

  componentDidMount() {
    console.log( '[Persons.js] Inside componentDidMount()' );
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillRecieveProps');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE] Inside shouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE] Inside componentDidUpdate');
  }
  render() {
    console.log( '[Persons.js] Inside render()' );
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        position={index}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;