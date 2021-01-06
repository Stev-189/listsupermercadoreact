import React from 'react'

export const TodoReset = ({handleResetTodo}) => {
  return (
    <div>
      <button
        className='btn btn-danger mt-1 form-control'
        onClick={handleResetTodo}
      >
      Traer lista
      </button> 
    </div>
  )
}
