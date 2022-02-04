import React from 'react';

function PopupWithForm(props) {
  return (
  <div className={`popup popup_class_${props.name} ${props.isOpen ? 'popup_opened' : '' }` }>
    <div className="popup__container">
      <button className={`popup__close-button popup__close-button_class_${props.name} button button_type_m-opacity`} onClick={props.onClose} type="button"></button>
      <h3 className="popup__title">{`${props.title}`}</h3>
      <form className={`popup__form popup__form_class_${props.name}`} method="POST" name={`${props.name}`} noValidate>
        {props.children}
      </form>
    </div>
</div>
  );
}

export default PopupWithForm;
