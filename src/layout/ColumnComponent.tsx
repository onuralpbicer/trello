import { makeStyles, createStyles } from '@material-ui/styles'
import React from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import AddNewEntryModal from '../components/AddNewEntryModal'
import { useColumn } from '../hooks/useColumn'
import {
    DraggableTodoItem,
    DragItemTypes,
    DropProps,
} from '../model/drag.model'
import { MoveEntry } from '../slices/columns.slice'
import ItemComponent from './ItemComponent'

const useStyles = makeStyles(
    createStyles({
        container: {
            height: '500px',
            width: '300px',
            marginLeft: '8px',
            marginRight: '8px',
            marginBottom: '16px',
            border: '1px solid gray',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
        },
        itemContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            padding: '8px',
            overflow: 'auto',
        },
    }),
)

interface ColumnComponentProps {
    colIndex: number
}

const ColumnComponent = (props: ColumnComponentProps): JSX.Element => {
    const { colIndex } = props
    const classes = useStyles(props)

    const { name, items } = useColumn(colIndex)
    const dispatch = useDispatch()

    const [{ isOver }, drop] = useDrop<DraggableTodoItem, unknown, DropProps>({
        accept: DragItemTypes.TodoItem,
        collect(monitor) {
            return {
                isOver: monitor.isOver(),
            }
        },
        drop(dragItem) {
            dispatch(
                MoveEntry({
                    item: dragItem,
                    sourceCol: dragItem.startLocation.colIndex,
                    sourceEntryIndex: dragItem.startLocation.entryIndex,
                    targetCol: colIndex,
                }),
            )
        },
    })

    return (
        <div
            className={classes.container}
            ref={drop}
            style={{ backgroundColor: isOver ? 'green' : 'transparent' }}
        >
            <div>
                {name}
                <AddNewEntryModal colIndex={colIndex} />
            </div>
            <div className={classes.itemContainer}>
                {items.map((item, index) => (
                    <ItemComponent
                        key={`${colIndex}${index}${item.id}`}
                        card={item}
                        colIndex={colIndex}
                        entryIndex={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColumnComponent
