import React from 'react'

export function CreateTodoButton(props) {
    const onClickButton = (message) => {
        alert(message);
    }
    return (

        <button 
            className='add-button'
            onClick={() => onClickButton('Hiciste click en el +')}
        >
            +
        </button>
    );
}
