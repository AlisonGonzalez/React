import React from 'react';
import PropTypes from 'prop-types';

const Actor = ({id, photo, name, character, onRemove}) =>
  <li>
    <span className = 'photo'>
      <img src={photo}/>
    </span>
    <span className = 'name'>
      {name}
    </span>
    <span className = 'character'>
      {character}
    </span>
    <button onClick = {()=>onRemove(id)}>Eliminar</button>
  </li>;

const urlPattern = new RegExp('^(https?:\\/\\/)?' +   // protocol
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +  // domain name
'((\\d{1,3}\\.){3}\\d{1,3}))' +                       // OR ip (v4) address
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +                   // port and path
'(\\?[;&a-z\\d%_.~+=-]*)?' +                          // query string
'(\\#[-a-z\\d_]*)?$', 'i');                           // fragment locator

Actor.propTypes = {
  photo: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string'){
      return new Error(`${propName} debe ser un string en ${componentName}`);
    } else if (!/urlPattern/.test(props[propName])){
      return new Error(`${propName} debe ser una url válida en ${componentName}`);
    }
  },
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
}

Actor.defaultProps = {
  photo: "[foto]",
  name: "[nombre]",
  character: "[personaje]"
}
export default Actor;