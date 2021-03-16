import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MemeForm from './MemeForm';
import Meme from './Memes';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const INITIAL_FORM_STATE = {
    memeUrl: '',
    memeTopText: '',
    memeBottomText: '',
  };
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [editMode, setEditMode] = useState({idx: '', isEditing: false});
  const dispatch = useDispatch();
  const memes = useSelector((store) => store.memes)
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (editMode.isEditing) {
      dispatch({type: 'EDIT_MEME', payload: {...formData}, memeId: editMode.idx});
      setEditMode({idx: '', isEditing: false});
    } else {
      dispatch({type: 'ADD_MEME', payload: {...formData}});
    }
    setFormData(INITIAL_FORM_STATE);
  }

  const deleteMeme = (e) => {
    const memeIdx = parseInt(e.target.parentElement.id);
    dispatch({type: 'DELETE_MEME', payload: memeIdx})
  }

  const editMeme = (e) => {
    const memeIdx = parseInt(e.target.parentElement.id)
    setFormData(memes[memeIdx])
    setEditMode({idx: memeIdx, isEditing: true})
  }

  return (
    <Container>
      <Row className="align-items-center">
        <Col md={{ size: 8, offset: 4 }}>
          <div><h1>Meme Generator</h1></div>
        </Col>
        <MemeForm formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />
        <Meme deleteMeme={deleteMeme} editMeme={editMeme} />
      </Row>
    </Container>
  );
}

export default App;
