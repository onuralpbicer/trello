import { useSelector } from 'react-redux'
import { AppState, Column } from '../model/app.model'

export function useColumns(): Column[] {
    return useSelector((state: AppState) => state.todo.columns)
}
