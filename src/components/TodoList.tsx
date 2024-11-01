import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {TodoListPropsType} from "../Types";
import {Button} from "./Button";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const TodoList = ({title, tasks, date, onClick, filterTasks, addTask}: TodoListPropsType) => {

    // const inputRef = useRef<HTMLInputElement>(null)

    const [taskTitle, setTaskTitle] = useState<string>('')
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle('')
    }
    
    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle} onChange={changeTaskTitleHandler} onKeyUp={addTaskOnKeyUpHandler} />
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
                        const removeTaskHandler = () => {
                            onClick(task.id)
                        }

                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} onChange={()=>{}} />
                                <span>{task.title}</span>
                                <Button title="x" onClick={removeTaskHandler} />
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

