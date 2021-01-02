import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card, Column } from '../model/app.model'

const columnsSlice = createSlice({
    name: 'columns',
    initialState: [] as Column[],
    reducers: {
        LoadSavedColumns(state, action: PayloadAction<Column[]>) {
            state.push(...action.payload)
        },
        AddColumn(state, action: PayloadAction<{ name: string }>) {
            state.push({
                name: action.payload.name,
                items: [],
            })
        },
        AddEntryToColumn(
            state,
            action: PayloadAction<{ colIndex: number; entry: Card }>,
        ) {
            const { colIndex, entry } = action.payload
            state[colIndex].items.push(entry)
        },
        ClearColumns(state) {
            state.length = 0
        },
    },
})

export const {
    LoadSavedColumns,
    AddColumn,
    AddEntryToColumn,
    ClearColumns,
} = columnsSlice.actions
export default columnsSlice
