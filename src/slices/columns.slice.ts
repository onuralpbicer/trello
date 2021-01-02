import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Column, TodoState } from '../model/app.model'
import { DraggableTodoItem } from '../model/drag.model'

const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        columns: [] as Column[],
        nextId: 0,
    },
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
            state.columns.length = 0
        },
        MoveEntry(
            state,
            action: PayloadAction<{
                item: DraggableTodoItem
                sourceCol: number
                sourceEntryIndex: number
                targetCol: number
            }>,
        ) {
            const { columns } = state
            const {
                item,
                sourceCol,
                targetCol,
                sourceEntryIndex,
            } = action.payload
            columns[sourceCol].items.splice(sourceEntryIndex, 1)
            columns[targetCol].items.push(item.item)
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
