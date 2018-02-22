import React from 'react';
import Actor from './Actor.js';

const ActorList = ({id, name, actors, onRemove}) =>
  <div className = 'list'>
    <button onClick = {() => onRemove(id)}>X</button>
      <p className = "serieTitle">{name}</p>
      <p className = "serieID">{id}</p>
    <ul>
      {actors.map((actor, i) =>
        <Actor key = {i} {...actor}/>
        )}
    </ul>
  </div>;

export default ActorList;