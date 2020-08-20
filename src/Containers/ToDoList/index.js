import React, {Component} from 'react';
import ToDoItem from '../../Components/ToDoItem'
import NewToDoForm from '../../Components/NewToDoForm'

class ToDoList extends Component {

    static defaultProps = {
        tasks: [
    {done: true, text: 'Learn ReactJS'},
    {done: false, text: 'Go sleep'}
  ],
  title: 'My ToDo'
    }

  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const {tasks, draft} = this.state
    const list = tasks
    list.push({text: draft, done: false})
    this.setState({tasks: list, draft: ''})
  }

  render() {
    const {title} = this.props
    const {tasks, draft} = this.state
    return (
      <div>
        <h1>{title}</h1>
      {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
      <NewToDoForm 
        onSubmit={this.addToDo}
        onChange={this.updateDraft}
        draft={draft} />
      </div>
    )
  }
}

export default ToDoList