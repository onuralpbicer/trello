import { useSelector } from 'react-redux'
import { AppState, Column } from '../model/app.model'

export function useColumn(index: number): Column {
    return useSelector((state: AppState) => state.columns[index])
}
