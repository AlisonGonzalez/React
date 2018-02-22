import React from 'react';
const Color = ({id, title, color}) =>
    <li className ="color">
        <h1>{title}</h1>
        <div className ="color" style ={{ backgroundColor: color }} />
    </li>;
export default Color