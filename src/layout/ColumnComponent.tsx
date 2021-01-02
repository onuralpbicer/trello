import { makeStyles, createStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from '../components/Modal'
import { useColumn } from '../hooks/useColumn'
import { AddEntryToColumn } from '../slices/columns.slice'
import ItemComponent from './ItemComponent'

const useStyles = makeStyles(
    createStyles({
        container: {
            maxHeight: '500px',
            backgroundColor: '#ff000022',
            width: '200px',
            marginRight: '16px',
            marginBottom: '16px',
            '&:last-of-type': {
                marginRight: '0px',
            },
        },
        itemContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
    }),
)

interface ColumnComponentProps {
    colIndex: number
}

const ColumnComponent = (props: ColumnComponentProps): JSX.Element => {
    const { colIndex } = props
    const classes = useStyles(props)

    const dispatch = useDispatch()
    const { name, items } = useColumn(colIndex)

    const [openNewEntry, setOpenNewEntry] = useState<boolean>(false)
    const [newEntry, setNewEntry] = useState<string>('')

    const handleCloseNewEntry = () => {
        setNewEntry('')
        setOpenNewEntry(false)
    }

    const handleAddEntry = () => {
        if (newEntry) {
            dispatch(AddEntryToColumn({ colIndex, entry: { text: newEntry } }))
            handleCloseNewEntry()
        }
    }

    return (
        <div className={classes.container}>
            <div>
                {name}
                <button onClick={() => setOpenNewEntry(true)}>+</button>
                <Modal show={openNewEntry} onClose={handleCloseNewEntry}>
                    <div>
                        <input
                            placeholder="message"
                            value={newEntry}
                            onChange={(event) =>
                                setNewEntry(event.target.value)
                            }
                            autoFocus
                        />
                        <button disabled={!newEntry} onClick={handleAddEntry}>
                            Add
                        </button>
                    </div>
                </Modal>
            </div>
            <div className={classes.itemContainer}>
                {items.map((item, index) => (
                    <ItemComponent key={`${colIndex}${index}`} {...item} />
                ))}
            </div>
        </div>
    )
}

export default ColumnComponent
