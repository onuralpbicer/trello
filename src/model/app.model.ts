export interface Column {
    name: string
    items: Card[]
}

export interface Card {
    text: string
    id: number
}

export interface AppState {
    todo: TodoState
}

export interface TodoState {
    columns: Column[]
    nextId: number
}
