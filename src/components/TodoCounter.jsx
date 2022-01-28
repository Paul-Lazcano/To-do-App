import React, {useContext} from 'react'
import { TodoContext } from "../TodoContext/index";

export function TodoCounter() {
    const { completedTodos, totalTodos } = useContext(TodoContext)
        
    if(!!totalTodos) {
        return (
            <h1 className='counter'>{`Has completado ${completedTodos || 0} de ${totalTodos || 0} tareas`}</h1>
        ) 
    } else {
        return (
            <h1 className="counter">No has agregado ninguna tarea</h1>
        )
    }
        
}
