import React from 'react';

const AddSerie = ({onNewSerie = f => f}) => {
  let _id, _name;
  const submit = e => {
    e.preventDefault();
    onNewSerie( _name.value, _id.value);
    _name.value = '';
    _id.value = '';
    _name.focus();
  }

  return (
    <form onSubmit = {submit} className = "listForm">
      <h3>Agregar Serie</h3>
      <input ref = {input => _name = input} type = "text" placeholder = "Nombre de la serie" required />
      <input ref = {input => _id = input} type = "text" placeholder = "ID de la serie" required />
      <button>Agregar</button>
    </form> );
};

export default AddSerie;