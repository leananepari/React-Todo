import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { Card } from 'semantic-ui-react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }
      ]
    }
  }

  toggleCompleted = (todo) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todo.id) {
          return {...item,
                  completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    if (todo.task !== '') {
      this.setState({
        todos: [...this.state.todos, todo]
      })
    }
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.completed === false;
      })
    })
  }

  render() {
    return (
      <Card.Group style={{margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card style={{width: '50%', background: 'rgb(174, 214, 170)'}}>
          <Card.Content>
            <Card.Header style={{padding: '20px 0 20px 0', fontSize: '25px'}}>Welcome to your Todo App!</Card.Header>
            <TodoList list={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </Card.Content>
          <Card.Content style={{display: 'flex', justifyContent: 'center'}}>
            <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
          </Card.Content>
          
        </Card>
      </Card.Group>
    );
  }
}

export default App;
