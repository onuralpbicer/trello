import { AppState, Column } from '../model/app.model'

export const columnsSelector = (state: AppState): Column[] => state.columns

export const numColumnsSelector = (state: AppState): number =>
    columnsSelector(state).length

export const columnSelector = (
    state: AppState,
    props: { index: number },
): Column => columnsSelector(state)[props.index]
