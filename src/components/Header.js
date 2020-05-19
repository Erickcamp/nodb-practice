import React, { Component } from "react"

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Your To-Do List</h1>
      </div>
    )
  }
}
// the only thing your doing in this component is returning an h1 tag.. IF your component is a STATELESS COMPONENT, ie it just renders some jsx you could write it like this:
// const Header = () => (<div><h1>Your To-do List</h1></div>)
// export default Header

export default Header

// check out this difference:

// difference between curly braces vs parens in a functional component

// const Header = () => (<h1>simple jsx</h1>)

// const Header = () => {
//   return (<h1>simple jsx</h1>)
// }

// these two are basically the same, however the 2nd example with the curly brackets allow you some space to do some javasscript stuff before you render/return like this:

// const Header = () => {
//   if(window.location.path.includes('brent')){
//     return <h1>sup brent</h1>
//   }
//   return (<h1>simple jsx</h1>)
// }
