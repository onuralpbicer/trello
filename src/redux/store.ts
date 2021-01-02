import { combineReducers, configureStore } from '@reduxjs/toolkit'
import columnsSlice from '../slices/columns.slice'

const reducer = combineReducers({
    todo: columnsSlice.reducer,
})

export const store = configureStore({
    reducer,
})

window.onbeforeunload = () => {
    localStorage.setItem(saveKey, JSON.stringify(store.getState()))
}

export const saveKey = 'savedState'
