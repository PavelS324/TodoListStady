
export type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    date?: string
    onClick: (id: string) => void
    filterTasks: (filter: FiltersType) => void
    addTask: (title: string) => void
    changeStatusTask: (id: string, checked: boolean) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type ButtonPropsType = {
    title: string
    onClick?: () => void
}

export type FiltersType = "all" | "active" | "completed"

