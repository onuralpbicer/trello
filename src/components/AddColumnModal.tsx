import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddColumn } from '../slices/columns.slice'
import Modal from './Modal'

const AddColumnModal = (): JSX.Element => {
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
        <>
            <Modal show={openCreateColumn} onClose={handleCloseNewColumn}>
                <div>
                    <div>Create New Column</div>
                    <input
                        placeholder="Enter Column Name"
                        value={newColumnName}
                        onChange={(event) =>
                            setNewColumnName(event.target.value)
                        }
                        onKeyDown={(event) => {
                            if (
                                event.key === 'Enter' &&
                                !event.ctrlKey &&
                                !event.shiftKey
                            )
                                handleAddColumn()
                        }}
                        autoFocus
                    />
                    <button onClick={handleAddColumn} disabled={!newColumnName}>
                        Add
                    </button>
                </div>
            </Modal>
            <button onClick={() => setOpenCreateColumn(true)}>
                Add Column
            </button>
        </>
    )
}

export default AddColumnModal
