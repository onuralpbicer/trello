import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoState } from '../model/app.model'
import { DraggableTodoItem } from '../model/drag.model'

const initialState: TodoState = {
    columns: [
        {
            name: 'ToDo',
            items: [
                {
                    id: 0,
                    text: 'Change order of items',
                },
            ],
        },
        {
            name: 'Done',
            items: [],
        },
    ],
    nextId: 1,
}

const columnsSlice = createSlice({
    name: 'columns',
    initialState: initialState,
    reducers: {
        LoadSavedColumns(state, action: PayloadAction<TodoState>) {
            state.columns = action.payload.columns
            state.nextId = action.payload.nextId
        },
        AddColumn(state, action: PayloadAction<{ name: string }>) {
            state.columns.push({
                name: action.payload.name,
                items: [],
            })
        },
        AddEntryToColumn(
            state,
            action: PayloadAction<{ colIndex: number; text: string }>,
        ) {
            const { colIndex, text } = action.payload
            state.columns[colIndex].items.push({
                text,
                id: state.nextId,
            })
            state.nextId++
        },
        ClearColumns(state) {
            state.columns = []
            state.nextId = 0
        },
        MoveEntry(
            state,
            action: PayloadAction<{
                item: DraggableTodoItem
                sourceCol: number
                sourceEntryIndex: number
                targetCol: number
                targetIndex: number
            }>,
        ) {
            const { columns } = state
            const {
                item,
                sourceCol,
                targetCol,
                sourceEntryIndex,
                targetIndex,
            } = action.payload
            columns[sourceCol].items.splice(sourceEntryIndex, 1)
            columns[targetCol].items.splice(targetIndex, 0, item.item)
        },
    },
})

export const {
    LoadSavedColumns,
    AddColumn,
    AddEntryToColumn,
    ClearColumns,
    MoveEntry,
} = columnsSlice.actions
export default columnsSlice
