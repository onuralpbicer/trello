export interface Column {
    name: string
    items: Card[]
}

export interface Card {
    text: string
}

export interface AppState {
    columns: Column[]
}
