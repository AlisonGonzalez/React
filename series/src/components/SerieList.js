import React from 'react';
import ActorList from './ActorList.js';

const SerieList = ({series, onRemove}) =>
  <div className = "serieList">
    <h1>Mis series</h1>
    {series.map((series, i) => 
      <ActorList key = {i} {...series} onRemove = {onRemove}/>
      )}
  </div>;

export default SerieList;