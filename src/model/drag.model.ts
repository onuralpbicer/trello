import { EntryLocation } from '../layout/ItemComponent'
import { Card } from './app.model'

export enum DragItemTypes {
    TodoItem = 'TodoItem',
}

export type DraggableTodoItem = ItemWithType<Card>

export interface ItemWithType<T> {
    type: DragItemTypes.TodoItem
    item: T
    startLocation: EntryLocation
}

export interface DragProps {
    isDragging: boolean
}

export interface DropProps {
    isOver: boolean
}
