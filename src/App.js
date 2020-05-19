import React, {Component} from 'react';

import './App.css';

class App extends Component  {
  constructor(){
    super()
    this.state = {
      todos: ['Dishes', 'Garbage', 'Learn to code', 'Destroy the Death Star']
    }
  }


  render(){
  return (
    <div className="App">
      {this.state.todos.map(todo => {
        return (<p>{todo}</p>)
      })}
    </div>
    );
  }
}

export default App;
