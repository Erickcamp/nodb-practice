import React, { Component } from "react"

import "./App.css"
import Button from "./components/Button"
import Header from "./components/Header"

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: ["Dishes", "Garbage", "Learn to code", "Destroy the Death Star"],
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        {this.state.todos.map((todo) => {
          return <p>{todo}</p>
        })}
        <Button onAddFn={this.onAdd} />
      </div>
    )
  }
}

export default App
