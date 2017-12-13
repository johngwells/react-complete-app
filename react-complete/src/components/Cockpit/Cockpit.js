import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const assignedClasses = [];
  // let btnClass = '';
  // if (props.showPersons) {
  //   btnClass = classes.Red;
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  // css: let classes = ['red', 'bold'].join(' ');
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    // HOC (Aux) can remove divs/html elements if not needed (using flexbox etc)
    // so we can wrap with a higher order function and wrap it.
    <Aux>
    {/* <div className={classes.Cockpit}> */}
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>goodbye</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    {/* </div> */}
    </Aux>
  );
};

export default cockpit;