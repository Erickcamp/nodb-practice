import React, {Component} from 'react'

 class Button extends Component {
     constructor() {
         super()
         this.state = {
            task: ''
         }
     }

     updateTask(task){
         this.setState({task})
     }

     onAdd(){
         const {task} = this.state
         const onAddFn = this.props

     onAddFn(task)
        this.setState({task: ''})
     
     }
     render(){
         const {task} = this.state
    return <div>
        <input placeholder='Whats your next task?' 
        value = {task}
        onChange={(e) => this.updateTask(e.target.value)}/>
        <button onClick={this.onAdd}>New Task</button>

    </div>
     }
}
export default Button