import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log( '[Person.js] Inside Constructor', props );
  }

  componentWillMount() {
    console.log( '[Person.js] Inside componentWillMount()' );
  }

  componentDidMount() {
    console.log( '[Person.js] Inside componentDidMount()' );
    // focuses on first element
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
    // this.inputElement.focus(); // focuses on the last element (highlight around text)
  }
  render() {
    console.log( '[Person.js] Inside render()' );  
    return (
      <WithClass classes={classes.Person}>
      {/* <div className={classes.Person}> */}
        <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(input) => { this.inputElement = input }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      {/* </div> */}
      </WithClass>
    );
  }
}

// This is good when working in teams, so another developer puts in the correct data
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;