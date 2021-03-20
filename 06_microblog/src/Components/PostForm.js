import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";
import { sendPostToAPI, updatePostFromAPI } from "../Reducers/Actions/posts";

const PostForm = ({ story = {id: uuidv4(), title: "", description: "" , body: ""}, formType="create", toggleEditState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const INITIAL_STATE = story;
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "create") {
      dispatch(sendPostToAPI(formData));
      history.push("/");
    } else if (formType === "edit") {
      dispatch(updatePostFromAPI(formData));
      toggleEditState();
    }
  }

  const handleCancel = () => {
    if (formType === "create") {
      history.push("/");
    } else if (formType === "edit") {
      toggleEditState();
    }
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="editform-title">Title:</label>
      <input 
              required
              id="editform-title"
              name="title"
              className="form-control" 
              placeholder="Title..."
              value={formData.title} 
              onChange={handleChange}/>
      </div>

      <div className="form-group">
      <label htmlFor="editform-description">Description:</label>
      <input 
              required
              id="editform-description"
              name="description"
              className="form-control" 
              placeholder="Description..."
              value={formData.description} 
              onChange={handleChange}/>
      </div>

      <div className="form-group">
      <label htmlFor="editform-body">Body:</label>
      <textarea 
                required
                id="editform-body"
                name="body"
                className="form-control"
                placeholder="Body..."
                rows={10} 
                value={formData.body} 
                onChange={handleChange}/>
      </div>

      <button className="btn btn-primary mr-2">Save</button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel} >Cancel</button>
    </form>
  );
}

export default PostForm;
