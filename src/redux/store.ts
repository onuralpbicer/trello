import { combineReducers, configureStore } from '@reduxjs/toolkit'
import columnsSlice from '../slices/columns.slice'

const reducer = combineReducers({
    todo: columnsSlice.reducer,
})

export const store = configureStore({
    reducer,
})

window.onbeforeunload = () => {
    const state = store.getState()
    localStorage.setItem(saveKey, JSON.stringify(state))
}

export const saveKey = 'savedState'
