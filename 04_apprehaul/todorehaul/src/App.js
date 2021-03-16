import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { useDispatch} from 'react-redux';
import TodoForm from './TodoForm';
import Todos from './Todos';

export default function App() {
  const INITIAL_FORM_STATE = {
    todoItem: ''
  };
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: {...formData}});
    setFormData(INITIAL_FORM_STATE);
  }

  const deleteTodo = (e) => {
    const todoIdx = parseInt(e.target.parentElement.id);
    dispatch({type: 'DELETE_TODO', payload: todoIdx})
  }


  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
          <h1>ToDo List</h1>
        </Col>
        <TodoForm formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />
        <Todos deleteTodo={deleteTodo} />
      </Row>
    </Container>
  );
}
