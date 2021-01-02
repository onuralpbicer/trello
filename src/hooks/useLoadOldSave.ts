import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppState } from '../model/app.model'
import { saveKey } from '../redux/store'
import { LoadSavedColumns } from '../slices/columns.slice'

export function useLoadSavedColumns(): void {
    const dispatch = useDispatch()

    useEffect(() => {
        const savedString = localStorage.getItem(saveKey)
        if (savedString) {
            const savedState: AppState = JSON.parse(savedString)
            dispatch(LoadSavedColumns(savedState.todo))
        }
    }, [])
}
