import React from 'react';
import {withState, defaultProps, withProps, compose } from 'recompose';

const enhance = withState('name', 'changeName', 'Son');
const enhance2 = defaultProps({
  age: 20
});
const enhance3 = withProps(
  (props) => ({
    ...props,
    age: props.age * 2
  })
)

const finalEnhance = compose(
  enhance,
  enhance2,
  enhance3
);

export default finalEnhance(function App(props) {
  return (<div>
    <h1>It works {props.name}</h1>
    <p>My age is {props.age}</p>
    <input
      type="text"
      onChange={(e) => {
        const value = e.target.value;
        props.changeName((name) => value);
      }}
      value={props.name}/>
  </div>);
});
