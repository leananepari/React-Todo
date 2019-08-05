import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      id: Date.now(),
      completed: false
    }
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        this.props.addTodo(e, this.state)
        this.setState({
          task: '',
          id: Date.now(),
          completed: false
        })
        }}>
        <input 
        type="text" 
        name="task"
        value={this.state.task}
        placeholder="...todo" 
        onChange={this.handleChange}
        />

        <input type="submit" value="Add todo"/>
        <button  >Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm;