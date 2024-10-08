
export type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    date?: string
    onClick: (id: number) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type ButtonPropsType = {
    title: string
    onClick?: () => void
}

