import React from 'react';
import Actor from './Actor.js'

const ActorList = ({actors, onRemove}) =>
  <div className='list'>
    <h1>Game of Thrones</h1>
    <ul>
      {actors.map((actor, i) =>
        <Actor key={i} {...actor} onRemove = {onRemove}/>

        )}
    </ul>
  </div>;

export default ActorList;