import React from 'react';
import Color from './Color.js'
const ColorList = ({ colors =[] }) =>
    <ul className ="color-list" >
        {( colors.length === 0) ? <p>Agrega un color</p>
            : colors.map( color =>
                <Color key ={color.id} {... color} />
            )
        }
    </ul>;
export default ColorList