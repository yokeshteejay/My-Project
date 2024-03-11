// import { render, screen } from '@testing-library/react';
// import App from './App';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React, { useState } from "react";
import { Todo } from "./todo";
import { Todolist } from "./todolist";
function App() {

  const [todo,settodo] = useState([])

  let addlist = (data)=>{ 
    if(data!=='') 
    settodo([...todo,data])
  }

  const deleteItem=(key)=>{
    let newlist=[...todo]; 
    newlist.splice(key,1) 
    settodo([...newlist])
  }
  return(
    <>
    <Todo addlist={addlist}/>
    {/* <Todolist/> */}
    <h1>TODO</h1>
    <hr></hr>
    {todo.map((listItem,i)=>{
      return(
      <Todolist key={i}
      index={i}
      item={listItem} 
      deleteItem={deleteItem}/>)
      })}
    </>
  )
  
}
export {App}