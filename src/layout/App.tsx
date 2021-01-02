import { createStyles, makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from '../components/Modal'
import { useLoadSavedColumns } from '../hooks/useLoadOldSave'
import { useNumColumns } from '../hooks/useNumColumns'
import { AddColumn, ClearColumns } from '../slices/columns.slice'
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

    const [newColumnName, setNewColumnName] = useState<string>('')
    const [openCreateColumn, setOpenCreateColumn] = useState<boolean>(false)

    const handleAddColumn = () => {
        if (newColumnName) {
            dispatch(AddColumn({ name: newColumnName }))
            setNewColumnName('')
            setOpenCreateColumn(false)
        }
    }

    const handleCloseNewColumn = () => {
        setOpenCreateColumn(false)
        setNewColumnName('')
    }

    return (
        <div className={classes.pageContainer}>
            <div>
                <Modal show={openCreateColumn} onClose={handleCloseNewColumn}>
                    <div>
                        <div>Create New Column</div>
                        <input
                            placeholder="Enter Column Name"
                            value={newColumnName}
                            onChange={(event) =>
                                setNewColumnName(event.target.value)
                            }
                            autoFocus
                        />
                        <button
                            onClick={handleAddColumn}
                            disabled={!newColumnName}
                        >
                            Add
                        </button>
                    </div>
                </Modal>
                <button onClick={() => setOpenCreateColumn(true)}>
                    Add Column
                </button>
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
