import React from 'react'

export function TodoCounter({ total, completed }) {
    return (
        <h1 className='counter'>{`Has completado ${completed} de ${total}`}</h1>
    )
}
