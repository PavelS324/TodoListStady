import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {FiltersType, TodoListPropsType} from "../Types";
import {Button} from "./Button";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const TodoList = ({title, tasks, date, onClick, filterTasks, addTask, changeStatusTask, filterForTasks}: TodoListPropsType) => {

    // const inputRef = useRef<HTMLInputElement>(null)

    const [taskTitle, setTaskTitle] = useState<string>('')
    const [errorNameTask, setErrorNameTask] = useState<string | null>(null)
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setErrorNameTask(null)
    }

    const addTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            addTask(taskTitle)
            setTaskTitle('')
        }
        else {
            setErrorNameTask('Title is required')
        }
    }
    
    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatusTask(e.currentTarget.id, e.currentTarget.checked)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle} onChange={changeTaskTitleHandler} onKeyUp={addTaskOnKeyUpHandler} className={(errorNameTask) ? 'error' : ''} />
                <Button title="+" onClick={addTaskHandler} />
                {/*<input onChange={() => changeInputOfTask} ref={inputRef}/>*/}
                {/*<Button title="+" onClick={() => {if (inputRef.current) {addTask(inputRef.current.value); inputRef.current.value = '' }}} />*/}
                {errorNameTask && <div className={(errorNameTask) ? 'error-message' : ''}>Title is required</div>}
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
                                <input type="checkbox" checked={task.isDone} onChange={onChangeHandler} id={task.id} />
                                <span>{task.title}</span>
                                <Button title="x" onClick={removeTaskHandler} />
                            </li>
                        )
                    })}
                </ul>
            )
            }
            <div>
                <Button title="All" onClick={() => filterTasks('all')} className={filterForTasks === 'all' ? 'active-filter' : ''} />
                <Button title="Active" onClick={() => filterTasks('active')} className={filterForTasks === 'active' ? 'active-filter' : ''} />
                <Button title="Completed" onClick={() => filterTasks('completed')} className={filterForTasks === 'completed' ? 'active-filter' : ''} />
            </div>
            <div>{date}</div>
        </div>
    )
}

