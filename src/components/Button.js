import React, {Component} from 'react'

 class Button extends Component {
     constructor() {
         super()
         this.state = {
            task: ''
         }
         this.onAdd = this.onAdd.bind(this)
     }

     updateTask(task){
         this.setState({task})
     }

     onAdd(){
         const {task} = this.state
         const {onAddFn} = this.props

        onAddFn(task)
        this.setState({task: ''})
        //need to figure out a push to the array. 
     
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