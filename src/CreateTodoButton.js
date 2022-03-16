import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const addItem = (msg) => {
        alert(msg);
    }
    return (
        <button className="CreateTodoButton"
            onClick={() => { addItem('Aqui estoy yo agregando') }}
        >+</button>
    );
}

export { CreateTodoButton };