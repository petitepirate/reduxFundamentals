import React from 'react';
import { Card, Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';

export default function TodoForm({formData, changeHandler, submitHandler}) {
  const { todoItem } = formData;
  return (
    <Col md="12" className="mt-3 text-center">
    <Card>
      <Form className="p-3" onSubmit={submitHandler}>
        <FormGroup>
          <Label for="todo-item">Todo Item</Label>
          <Input type="text" id="todo-item" name="todoItem" value={todoItem} onChange={changeHandler}></Input>
        </FormGroup>
        <Button type="submit" color="info">Add</Button>
      </Form>
    </Card>
    </Col>
  )
}
