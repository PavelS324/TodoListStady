import React from "react";
import {TaskType, TodoListPropsType} from "../Types";

export const TodoList = ({title, tasks, date}: TodoListPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
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
                            <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )
            }
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
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
