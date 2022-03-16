import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
}) => {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {error && <p>Ey men que error el que tienes...</p>}
                {loading && <p>Estamos Cargando...</p>}


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

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };
