import React from 'react';

function ImagePopup(props) {

  return (
  <div className={`popup popup_class_image-show ${props.card ? 'popup_opened' : '' }`}>
    <figure className="popup__full-image">
    <button className="popup__close-button popup__close-button_class_image-show button button_type_m-opacity" type="button" onClick={props.onClose}></button>
    <img className="popup__image" alt="practicum-made-me-write-here-something" src="" / >
    <figcaption className="popup__image-text">{}</figcaption>
    </figure>
  </div>
  );
}

export default ImagePopup;
