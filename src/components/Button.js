import React, { Component } from "react"

// This component handles more than just a button, id name it something else like AddTask or something
class Button extends Component {
  constructor() {
    super()
    this.state = {
      task: "",
    }

    this.onAdd = this.onAdd.bind(this)
  }

  updateTask(task) {
    this.setState({ task })
  }

  onAdd() {
    const { task } = this.state
    const { onAddFn } = this.props

    onAddFn(task)
    this.setState({ task: "" })
    //need to figure out a push to the array. you want a "callback handler", see book snippet below.
  }

  render() {
    const { task } = this.state
    return (
      <div>
        <input
          placeholder='Whats your next task?'
          value={task}
          //e gets passed automagically on an event listener function (onChange), you could simplify this here to be just onChange={this.updateTask}
          // and then up in your this.updateTask method you could accept the e(currently named as a task param) and drill down to your value up there, traditionally you wanna try to keep your jsx area (everything in return)
          // as clean as possible.
          onChange={(e) => this.updateTask(e.target.value)}
        />
        <button onClick={this.onAdd}>New Task</button>
      </div>
    )
  }
}
export default Button

// this is extracted from a book called a road to react by robin wieruch

// Callback Handlers in JSX
// Next we'll focus on the input field and label, by separating a standalone Search component and creating an component instance of it in the App component. Through this process, the Search component becomes a sibling of the List component, and vice versa. We'll also move the handler and the state into the Search component to keep our functionality intact.

// const App = () => {
//   const stories = [ ... ];

//   return (
//     <div>
//       <h1>My Hacker Stories</h1>

//       <Search />

//       <hr />

//       <List list={stories} />
//     </div>
//   );
// };

// const Search = () => {
//   const [searchTerm, setSearchTerm] = React.useState('');

//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input id="search" type="text" onChange={handleChange} />

//       <p>
//         Searching for <strong>{searchTerm}</strong>.
//       </p>
//     </div>
//   );
// };
// We have an extracted Search component that handles state and shows state without revealing its content. The component displays the searchTerm as text but doesn't share this information with its parent or sibling components yet. Since Search component does nothing except show the search term, it becomes useless for the other components.

// There is no way to pass information as JavaScript data types up the component tree, since props are naturally only passed downwards. However, we can introduce a callback handler as a function: A callback function gets introduced (A), is used elsewhere (B), but "calls back" to the place it was introduced (C).

// const App = () => {
//   const stories = [ ... ];

//   // A
//   const handleSearch = event => {
//     // C
//     console.log(event.target.value);
//   };

//   return (
//     <div>
//       <h1>My Hacker Stories</h1>

//       <Search onSearch={handleSearch} />

//       <hr />

//       <List list={stories} />
//     </div>
//   );
// };

// const Search = props => {
//   const [searchTerm, setSearchTerm] = React.useState('');

//   const handleChange = event => {
//     setSearchTerm(event.target.value);

//     // B
//     props.onSearch(event);
//   };

//   return ( ... );
// };
// Consider the concept of the callback handler: We pass a function from one component (App) to another component (Search); we call it in the second component (Search); but have the actual implementation of the function call in the first component (App). This way, we can communicate up the component tree. A handler function used in one component becomes a callback handler, which is passed down to components via React props. React props are always passed down as information the component tree, and callback handlers passed as functions in props can be used to communicate up the component hierarchy.
