import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {TaskType} from "./Types";

function App() {
    const tasks1: Array<TaskType> = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: TaskType[] = [
        { id: 1, title: 'Hello world', isDone: true },
        { id: 2, title: 'I am Happy', isDone: false },
        { id: 3, title: 'Yo', isDone: false },
    ]

    return (
        <div className="App">
            <TodoList title="What to learn" tasks={tasks1} date="20240930" />
            <TodoList title="Songs" tasks={tasks2} />
            {/*<TodoList title="WSongs" />*/}
            {/*<TodoList title="Books" />*/}
        </div>
    );
}

export default App;
