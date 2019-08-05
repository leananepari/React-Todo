import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      completed: 'completed'
    }
  }

  render() {
    return (
      <div className={this.props.todo.completed ? this.state.completed : null} onClick={() => this.props.toggleCompleted(this.props.todo)}
           style={{padding: '10px', color: 'rgba(0,0,0,.6)'}}>
            {this.props.todo.task}
      </div>
    )
 }
}

export default Todo;