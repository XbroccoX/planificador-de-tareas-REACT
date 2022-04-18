import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';

const AppUI = () => {

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Ey men que error el que tienes...</p>}
                {loading && <p>Estamos Cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>CREAR TU PRIMER TODO</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };
