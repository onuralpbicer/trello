import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import { useDispatch } from 'react-redux'
import AddColumnModal from '../components/AddColumnModal'
import { useLoadSavedColumns } from '../hooks/useLoadOldSave'
import { useNumColumns } from '../hooks/useNumColumns'
import { ClearColumns } from '../slices/columns.slice'
import ColumnComponent from './ColumnComponent'

const useStyles = makeStyles(
    createStyles({
        pageContainer: {
            height: '100vh',
            width: '100vw',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
    }),
)

const App = (): JSX.Element => {
    const classes = useStyles()

    const numColumns = useNumColumns()
    useLoadSavedColumns()
    const dispatch = useDispatch()

    return (
        <div className={classes.pageContainer}>
            <div>
                <AddColumnModal />
                <button onClick={() => dispatch(ClearColumns())}>Clear</button>
            </div>
            <div className={classes.container}>
                {Array.from({ length: numColumns }, (_v, index) => (
                    <ColumnComponent key={index} colIndex={index} />
                ))}
            </div>
        </div>
    )
}

export default App
