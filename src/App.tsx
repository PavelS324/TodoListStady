import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {FiltersType, TaskType} from "./Types";

function App() {
    const [tasks1, setTasks1] = useState<TaskType[]>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'RTK query', isDone: false },
    ])

    // const tasks2: TaskType[] = [
    //     // { id: 1, title: 'Hello world', isDone: true },
    //     // { id: 2, title: 'I am Happy', isDone: false },
    //     // { id: 3, title: 'Yo', isDone: false },
    //     // { id: 4, title: 'Redux', isDone: false },
    // ]

    // const [count, setcount] = useState(0);
    //
    // const onClickDel = (id: number) => {
    //     setcount(id);
    //     alert(count);
    // }

    const delTask = (id: number) => {
        // alert(id)
        const filteredTasks = tasks1.filter(task => {
            return task.id !== id
        })
        setTasks1(filteredTasks)
    }

    const [filter, setFilter] = useState<FiltersType>('all')
    let tasksForTodoList = tasks1
    if (filter === 'active') {
        tasksForTodoList = tasks1.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks1.filter(task => task.isDone)
    }

    const filterTasks = (filter: FiltersType) => {
        setFilter(filter)
    }


    return (
        <div className="App">
            <TodoList title="What to learn" tasks={tasksForTodoList} date="20240930" onClick={delTask} filterTasks={filterTasks} />
            {/*<TodoList title="Songs" tasks={tasks2} />*/}
            {/*<TodoList title="WSongs" />*/}
            {/*<TodoList title="Books" />*/}
        </div>
    );
}

export default App;
