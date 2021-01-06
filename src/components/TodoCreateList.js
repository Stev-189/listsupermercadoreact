
export const TodoCreateList = (list) => {
  return list.map((e,i)=> {
    return {
      id: `${i}R${new Date().getTime()}`,
      desc: e,
      done: false
    }
  });
  
}
