import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const addItem = () => {
        props.setOpenModal(!props.openModal);
    }
    return (
        <button className="CreateTodoButton"
            onClick={() => addItem()}
        >+</button>
    );
}

export { CreateTodoButton };