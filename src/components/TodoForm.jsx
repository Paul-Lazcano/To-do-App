import React, {useContext, useState} from 'react';
import { TodoContext } from "../TodoContext/index";
export function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('')
    const [labelText, setLabelText] = useState('Escribe tu nuevo to-do!');
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    

    const onTextAreaWrite = evt => {
        setNewTodoValue(evt.target.value);
    };
    const onCancel = evt => {
        // TODO
        setOpenModal(false);
    };
    const onSubmit = evt => {
        evt.preventDefault();
        // TODO
        if(!!newTodoValue) {
            addTodo(newTodoValue);
            setNewTodoValue('');
            setOpenModal(false);
        } else{
            setLabelText('No puedes crear una tarea vacía, intenta de nuevo');
        }
    };
    
    return (
        <form onSubmit={onSubmit} className='form'>
            <label className="form__label">{labelText}</label>
            <textarea
                value={newTodoValue}
                onChange={onTextAreaWrite}
                placeholder="Ej: Salir a correr"
                className='form__text-area'
            />
            <div className="form__button-container">
                <button
                    type="button"
                    onClick={onCancel}
                    className="form__button form__button--close"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="form__button form__button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}
