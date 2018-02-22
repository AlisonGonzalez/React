import React from 'react';

const Actor = (actor) =>
  <li>
    <span className = 'photo'>
      <img alt = {actor.person.name} src = {actor.character.image.medium}/>
    </span>
    <span className = 'name'>
      {actor.person.name}
    </span>
    <span className = 'character'>
      {actor.character.name}
    </span>
  </li>;

export default Actor;