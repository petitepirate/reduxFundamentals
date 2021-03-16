import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import './Memes.css'

export default function Memes( { deleteMeme, editMeme } ) {
  const memes = useSelector((store) => store.memes);

  return(
    <>
      {memes.map((meme, idx) => (
        <div key={idx} id={idx} className="meme">
          <img src={meme.memeUrl} alt="Spicy Meme"></img>
          <div id="meme-top-text">{meme.memeTopText}</div>
          <div id="meme-bottom-text">{meme.memeBottomText}</div>
          <Button type="button" id="deleteBtn" color="danger" onClick={deleteMeme}>X</Button>
          <Button type="button" id="editBtn" color="secondary" onClick={editMeme}>Edit</Button>
        </div>
      ))}
    </>
  );

}
