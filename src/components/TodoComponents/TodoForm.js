import React from 'react';
import { Form } from 'semantic-ui-react';
import './Todo.css';

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
      <Form onSubmit={(e) => {
        this.props.addTodo(e, this.state)
        this.setState({
          task: '',
          id: Date.now(),
          completed: false
        })
        }}>
        <Form.Group style={{margin: '0'}}>
          <Form.Input style={{fontSize: '16px'}}
          type="text" 
          name="task"
          value={this.state.task}
          placeholder="...todo" 
          onChange={this.handleChange}
          />

          <Form.Button style={{fontSize: '16px', background: '#667f63', color: 'white'}} type="submit" content="Add todo"/>
          <Form.Button style={{fontSize: '16px'}} onClick={this.props.clearCompleted} >Clear Completed</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default TodoForm;