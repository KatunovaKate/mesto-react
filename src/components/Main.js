import React from 'react';
import api from './../utils/API';
import Card from './Card'

function Main(props) {

const [cards, setCards] = React.useState([]);
const [userName, setUserName] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [userDescription, setDescription] = React.useState('');

React.useEffect(() => {
    api.getInfo().then((userData) => {
      setUserName(userData.name);
      setUserAvatar(userData.avatar);
      setDescription(userData.about);
    }).catch((err) => console.log(err));

    api.getCards().then((cardData) => {
      setCards(cardData);
    }).catch((err) => console.log(err));
  }, []);

return (
<div>
  <main className="main">
    <section className="profile">
      <div className="profile__info">
        <div className="profile__avatar-common">
          <img style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" alt="" />
          <button type="button" className="profile__edit-photo button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__user-info">
          <div className="profile__name-edit">
            <h1 className="profile__username">{userName}</h1>
            <button type="button" className="profile__edit-button button button_type_m-opacity" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__user-description">{userDescription}</p>
        </div>
      </div>
      <button type="button" className="profile__add-button button button_type_m-opacity" onClick={props.onAddPlace}></button>
    </section>
   <section className="elements">
     <ul className="elements__list">
     {
          cards.map((card) => {
            return (
              <Card 
                  key ={card._id}
                  cardElement={card}  
                  onCardClick={props.onCardClick} 
                  onDeleteCardClick={props.onDeleteClick} 
                  />)
          })
        }
     </ul>
    </section>
  </main>
</div>
);
}

export default Main;
