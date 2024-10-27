import React, {useRef, useState} from "react";
import {TodoListPropsType} from "../Types";
import {Button} from "./Button";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const TodoList = ({title, tasks, date, onClick, filterTasks, addTask}: TodoListPropsType) => {

    // const inputRef = useRef<HTMLInputElement>(null)

    const [taskTitle, setTaskTitle] = useState<string>('')
    const changeInputOfTask = (titleLoc: string) => {
        // console.log('Change input text: ' + titleLoc + '___')
        setTaskTitle(titleLoc)
    }

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle('')
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle} onChange={event => changeInputOfTask(event.currentTarget.value)} onKeyUp={event => {
                    if (event.key === 'Enter') {
                        addTaskHandler()
                    }}} />
                <Button title="+" onClick={addTaskHandler} />
                {/*<input onChange={() => changeInputOfTask} ref={inputRef}/>*/}
                {/*<Button title="+" onClick={() => {if (inputRef.current) {addTask(inputRef.current.value); inputRef.current.value = '' }}} />*/}
            </div>
            {/*<TodoList_ul tasks={tasks} />*/}
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} onChange={()=>{}} />
                                <span>{task.title}</span>
                                <Button title="x" onClick={() => onClick(task.id)} />
                            </li>
                        )
                    })}
                </ul>
            )
            }
            <div>
                <Button title="All" onClick={() => filterTasks('all')} />
                <Button title="Active" onClick={() => filterTasks('active')} />
                <Button title="Completed" onClick={() => filterTasks('completed')} />
            </div>
            <div>{date}</div>
        </div>
    )
}

// const TodoList_ul = ({tasks}: TaskType[]) => {
//     if (tasks.length === 0) {
//         return <p>Тасок нет</p>
//     }
//     return (
//         <>
//             <ul>
//                 {/*<li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span></li>*/}
//                 {/*<li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>*/}
//                 {/*<li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>*/}
//                 {tasks.map(task => {
//                     return (
//                         <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }
