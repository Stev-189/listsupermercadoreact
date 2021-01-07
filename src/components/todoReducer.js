import { listSuper } from "./asset/listSuper";
import { TodoCreateList } from "./TodoCreateList";

export const todoReducer=(state=[],action)=>{
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter(todo=>todo.id!==action.payload);
    
    case 'toggle':
      // return state.map(todo=>(todo.id===action.payload)?{...todo, done: !todo.done}:todo);
      state=state.map(todo=>(todo.id===action.payload)?{...todo, done: !todo.done}:todo);
      let temp = state.find(todo=>todo.id===action.payload);
      state=state.filter(todo=>todo.id!==action.payload);
      return (temp.done)?[...state, temp]:[temp,...state];

    
    case 'reset':
      let listaS =TodoCreateList(listSuper)
      return listaS;
    
    default:
      return state;
  }
}