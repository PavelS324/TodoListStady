
export type TodoListPropsType = {
    title: string
    date: string
    tasks: TaskType[]
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

