import React from 'react';

function Card({cardElement, onCardClick, onDeleteCardClick}) {

function handleClick() {
   onCardClick(cardElement);
}  

function handleDeleteCardClick() {
    onDeleteCardClick(cardElement);
 }  
    
  return (
    <li className="element" >
        <div className="element__image" style={{ backgroundImage: `url(${cardElement.link})` }} onClick={handleClick}></div>
        <button type="button" className="element__delete-button button button_type_l-opacity" onClick={handleDeleteCardClick}></button>
        <div className="element__info">
          <h2 className="element__title">{cardElement.name}</h2>
          <div>
            <button type="button" className="element__like-button button button_type_l-opacity"></button>
            <div className="element__number-of-likes">{cardElement.likes.length}</div>
          </div>
        </div>
    </li>
  );
}

export default Card;
