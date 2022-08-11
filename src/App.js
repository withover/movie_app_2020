import React from 'react';

function Food(props) {
  console.log(props)
  return (
      <h3>I love to eat {props.fav}</h3>
  )
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Kimchi" somethins={true} papa={['hello', 1,2,3]}/>
    </div>
  )
}

export default App