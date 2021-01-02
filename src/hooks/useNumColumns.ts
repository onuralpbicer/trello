import { useSelector } from 'react-redux'
import { AppState } from '../model/app.model'

export function useNumColumns(): number {
    return useSelector((state: AppState) => state.todo.columns.length)
}
