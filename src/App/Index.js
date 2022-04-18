import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Hacer el trabajo de matem[aticas', completed: false },
//   { text: 'Leer libro', completed: false },
// ]



function App() {

  return [

    <TodoProvider>
      <AppUI />
    </TodoProvider>


  ];
}

export default App;
