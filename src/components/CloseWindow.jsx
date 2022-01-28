import React, {useContext} from 'react';
import { TodoContext } from "../TodoContext/index";
export function CloseWindow() {
    const {
        deleteTodo,
        setOpenModal,
        setOpenCloseWindow
    } = useContext(TodoContext);
    
    
    
    //evento de cancelar
    const closeWindow = evt => {
        setOpenModal(false);
        setOpenCloseWindow(false);
    };
    
    
    return (
        <section>
            <h3>Seguro que quieres borrar la tarea?</h3>
            <button>Si</button>
            <button onClick={closeWindow}>No</button>
        </section>
    )
}