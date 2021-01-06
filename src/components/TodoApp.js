import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { listSuper } from './asset/listSuper';
import { TodoCreateList } from './TodoCreateList';
import swal from 'sweetalert';

import './styles.css';
import { TodoReset } from './TodoReset';
let listaS =TodoCreateList(listSuper)
let listaStorage=JSON.parse(localStorage.getItem('todos'))
const init=()=>{
  return listaStorage || listaS
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
   
  const handleAddTodo=(newTodo)=>{
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }
  const handleResetTodo=()=>{
    swal({
      title: "Traer Lista",
      text: "Deseas traer nuevamente la lista de compras, se borraran los ultimos items agregados",
      icon: "info",
      dangerMode: true,
      buttons:['No', 'Si']
    }).then(e => {
      if (e) {
        dispatch({
          type: 'reset',
          payload: listaS
        })
        swal({icon: "success", timer: 1000});
      }
    });

  }
  const handleDelete=(todoId)=>{
    const action={
      type: 'delete',
      payload: todoId
    }
    dispatch(action)
  }

  const handleToggle=(todoId)=>{
    dispatch ({
      type: 'toggle',
      payload: todoId
    })
  }
  return (
    <div>
      <h1>Compras ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col-12'>

          <TodoList 
            todos={todos}
            handleDelete= {handleDelete}
            handleToggle={handleToggle}
          />
        </div>
      </div>
        <div className='col-12'>
          <TodoAdd handleAddTodo= {handleAddTodo}/>
        </div>

        <div className='col-12'>
          <TodoReset handleResetTodo={handleResetTodo}
          />
        </div>
    </div>
  )
}

