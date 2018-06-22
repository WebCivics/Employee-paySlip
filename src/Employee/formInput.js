import React from 'react';

const input = ( props ) => {
    let inputElement = null;
    
    const inputStyle = {
        outline: 'none',
        border: '1px solid #ccc',
        backgroundcolor: 'white',
        font: 'inherit',
        padding: '6px 10px',
        display: 'block',
        width: '100%',
        boxsizing: 'border-box'
   } 

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input style={inputStyle}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input style={inputStyle}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div style={{
            width: '100%',
            padding: '10px',
            boxsizing: 'border-box',
        }}>
            {inputElement}
        </div>
    );

};

export default input;