// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList({ list, toggleCompleted }) {

  return (
    <div style={{paddingBottom: '30px', fontSize: '18px'}}>
      {list.map((todo, index) => {
        return <Todo key= {index} todo={todo} toggleCompleted={toggleCompleted}/>
      })}
    </div>
  )

}

export default TodoList;