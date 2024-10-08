import React from "react";
import {TodoListPropsType} from "../Types";
import {Button} from "./Button";

export const TodoList = ({title, tasks, date, onClick, filterTasks}: TodoListPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+"/>
            </div>
            {/*<TodoList_ul tasks={tasks} />*/}
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {/*<li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>*/}
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button title="x" onClick={() => onClick(task.id)} />
                                {/*<span>{task.id}</span>*/}
                                {/*<button onClick={() => onClick(task.id)}>x</button>*/}
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
