import React, {useContext} from 'react'
import { TodoContext } from "../TodoContext/index";
export function TodoCounter() {
    const { completed, total } = useContext(TodoContext)
    return (
        <h1 className='counter'>{`Has completado ${completed ?? 0} de ${total ?? 0}`}</h1>
    )
}
