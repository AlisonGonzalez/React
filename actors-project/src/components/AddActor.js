import React from 'react';

const AddActor = ({onNewActor = f => f}) => {
  let _photo, _name, _character;
  const submit = e => {
    e.preventDefault();
    onNewActor( _name.value, _character.value, _photo.value);
    _name.value = '';
    _character.value = '';
    _photo.value = '';
    _photo.focus();
  }

  return (
    <form onSubmit = {submit} className = "actorForm">
      <h2>Agregar actor</h2>
      <input ref = {input => _name = input} type = "text" placeholder = "Nombre del actor" required />
      <input ref = {input => _character = input} type = "text" placeholder = "Personaje" required />
      <input ref = {input => _photo = input} type = "text" placeholder = "URL de foto" required />
      <button> Agregar </button>
    </form> );
};

export default AddActor;