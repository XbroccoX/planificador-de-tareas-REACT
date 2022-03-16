import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Hacer el trabajo de matem[aticas', completed: false },
//   { text: 'Leer libro', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorage.getItem(itemName))
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringLocalStorage = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringLocalStorage);
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

  }



  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  useEffect(() => {
    console.log('use efect');
  }, [totalTodos]);



  return [
    <AppUI totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  ];
}

export default App;
