// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList({ list }) {

  return (
    <div style={{paddingBottom: '30px'}}>
      {list.map((todo, index) => {
        return <Todo key= {index} todo={todo}/>
      })}
    </div>
  )

}

export default TodoList;