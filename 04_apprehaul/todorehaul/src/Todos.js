import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';

export default function Todos( { deleteTodo } ) {
  const todoList = useSelector((store) => store.todoList);

  return(
    <>
      {todoList.map((todo, idx) => (
        <div key={idx} id={idx} className="col-12 mx-auto text-center">
          <p className="d-inline-block mr-3 mt-3">{todo.todoItem}</p>
          <Button type="button" id="deleteBtn" color="danger" onClick={deleteTodo}>X</Button>
        </div>
      ))}
    </>
  );

}
