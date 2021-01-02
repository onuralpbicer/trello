import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppState } from '../model/app.model'
import { saveKey } from '../redux/store'
import { LoadSavedColumns } from '../slices/columns.slice'

export function useLoadSavedColumns(): void {
    const dispatch = useDispatch()

    useEffect(() => {
        const savedState: AppState = JSON.parse(
            localStorage.getItem(saveKey) || JSON.stringify({ columns: [] }),
        )

        dispatch(LoadSavedColumns(savedState.todo))
    }, [])
}
