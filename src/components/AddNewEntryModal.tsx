import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddEntryToColumn } from '../slices/columns.slice'
import Modal from './Modal'

interface AddNewEntryModalProps {
    colIndex: number
}

const AddNewEntryModal = (props: AddNewEntryModalProps): JSX.Element => {
    const { colIndex } = props
    const [openNewEntry, setOpenNewEntry] = useState<boolean>(false)
    const [newEntry, setNewEntry] = useState<string>('')

    const dispatch = useDispatch()

    const handleCloseNewEntry = () => {
        setNewEntry('')
        setOpenNewEntry(false)
    }

    const handleAddEntry = () => {
        if (newEntry) {
            dispatch(AddEntryToColumn({ colIndex, text: newEntry }))
            handleCloseNewEntry()
        }
    }
    return (
        <>
            <button onClick={() => setOpenNewEntry(true)}>+</button>
            <Modal show={openNewEntry} onClose={handleCloseNewEntry}>
                <div>
                    <input
                        placeholder="message"
                        value={newEntry}
                        onChange={(event) => setNewEntry(event.target.value)}
                        onKeyDown={(event) => {
                            if (
                                event.key === 'Enter' &&
                                !event.ctrlKey &&
                                !event.shiftKey
                            )
                                handleAddEntry()
                        }}
                        autoFocus
                    />
                    <button disabled={!newEntry} onClick={handleAddEntry}>
                        Add
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default AddNewEntryModal
