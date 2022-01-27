import React, {useContext} from 'react'
import { TodoContext } from '../TodoContext';
export function CreateTodoButton() {
    const {setOpenModal} = useContext(TodoContext)
    const toggleModal = () => {
        setOpenModal(prevState => !prevState);
    }

    return (

        <button 
            className='FAB'
            onClick={toggleModal}
        >
            <span className='FAB__icon'>+</span>
        </button>
    );
}
