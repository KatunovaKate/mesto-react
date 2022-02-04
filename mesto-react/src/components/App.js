import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isDeletePopupOpen, setisDeletePopupOpenn] = React.useState(false);
const [selectedCard, setselectedCard] = React.useState(false);
// const [selectedCard, setselectedCard] = React.useState([{ text: ''}]);

// function handleCardClick () {
//   setselectedCard([{
//     text:  `document.querySelector('.element__title')`
//   }]);
// }


function handleCardClick () {
  setselectedCard(true);
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleDeleteClick() {
  setisDeletePopupOpenn(true);
}


function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}

function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
}

function closeAllPopups() {
  setIsEditProfilePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setselectedCard(false);
  setisDeletePopupOpenn(false);
}

return (
  <div className="page__content">
  <Header />
  <Main onDeleteClick={handleDeleteClick} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
  <Footer />
  <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}> 
        <input placeholder="Имя" className="popup__form-name popup__input popup__form-name_class_edit" type="text" name="username" id="username" required minLength="2" maxLength="40" / >
        <span className="popup__input-error user-name-error" id="user-name-error"></span> 
        <input placeholder="О себе" className="popup__form-description popup__input popup__form-description_class_edit" type="text" name="description" id="description" required minLength="2" maxLength="200" / >
        <span className="popup__input-error description-error" id="description-error"></span> 
        <button className="popup__save-button popup__save-button_class_edit button button_type_s-opacity" type="submit">Сохранить</button>
    </PopupWithForm>
    <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input placeholder="Название" className="popup__form-name popup__input popup__form-name_class_add" type="text" name="title-of-image" id="title-of-image" required minLength="2" maxLength="30" / >
        <span className="popup__input-error title-of-image-error" id="title-of-image-error"></span> 
        <input placeholder="Ссылка на картинку" className="popup__form-description popup__input popup__form-description_class_add" name="image" id="image" required type="url" / >
        <span className="popup__input-error image-error" id="image-error"></span> 
        <button className="popup__save-button popup__save-button_class_add button button_type_s-opacity" type="submit">Создать</button>
    </PopupWithForm>
    <PopupWithForm name='remove' title='Вы уверены?' isOpen={isDeletePopupOpen} onClose={closeAllPopups}>
        <button className="popup__save-button popup__save-button_class_remove button button_type_s-opacity" type="submit">Да</button>
    </PopupWithForm>
    <PopupWithForm name='change-photo' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input placeholder="Ссылка на картинку" className="popup__form-description popup__input popup__form-description_change-photo" name="photo" id="photo" required type="url" / >
        <span className="popup__input-error image-error" id="photo-error"></span> 
        <button className="popup__save-button popup__save-button_change-photo button button_type_s-opacity" type="submit">Создать</button>
     </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
</div>
  )
}

export default App;
