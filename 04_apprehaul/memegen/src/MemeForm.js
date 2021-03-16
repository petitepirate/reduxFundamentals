import React from 'react';
import { Card, Button, CardText, Col, Form, FormGroup, Label, Input} from 'reactstrap';

export default function MemeForm({formData, changeHandler, submitHandler}) {
  const { memeUrl, memeTopText, memeBottomText } = formData;
  return (
    <Col md={{size: 8, offset: 2}} className="mt-3 text-center">
    <Card>
      <Form className="p-3" onSubmit={submitHandler}>
        <CardText>
          Create memes using the form below.<br />Enter a link for the image you want to use, some spicy text, and submit to view your masterpiece.
        </CardText>
        <FormGroup>
          <Label for="meme-url">Image URL</Label>
          <Input type="text" id="meme-url" name="memeUrl" value={memeUrl} onChange={changeHandler}></Input>
        </FormGroup>
        <FormGroup>
          <Label for="top-text">Top Text</Label>
          <Input type="text" id="top-text" name="memeTopText" value={memeTopText} onChange={changeHandler}></Input>
        </FormGroup>
        <FormGroup>
          <Label for="bottom-text">Bottom Text</Label>
          <Input type="text" id="bottom-text" name="memeBottomText" value={memeBottomText} onChange={changeHandler}></Input>
        </FormGroup>
        <Button type="submit" color="info">Generate!</Button>
      </Form>
    </Card>
    </Col>
  )
}
