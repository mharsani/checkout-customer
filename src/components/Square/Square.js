import React from 'react';

const Square = ({color, hadleClick}) => (
<div style={{
    backgroundColor: color,
    width: '100px',
    height: '100px'
}} onClick={hadleClick}/>
)

Square.defaultProps = {
    color: 'red'
}

export default Square;