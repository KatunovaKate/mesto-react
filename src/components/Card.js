import React from 'react';

function Card(props) {

function handleClick() {
   props.onCardClick(props.card);
}  

function handleDeleteCardClick() {
    props.onDeleteCardClick(props.card);
 }  
    
  return (
    <li className="element"  key={props.cardId}>
        <div className="element__image" style={{ backgroundImage: `url(${props.cardImage})` }} onClick={handleClick}></div>
        <button type="button" className="element__delete-button button button_type_l-opacity" onClick={handleDeleteCardClick}></button>
        <div className="element__info">
        <h2 className="element__title">{props.cardName}</h2>
        <div><button type="button" className="element__like-button button button_type_l-opacity"></button>
        <div className="element__number-of-likes">{props.cardLikes.length}</div>
        </div>
        </div>
    </li>
  );
}

export default Card;
