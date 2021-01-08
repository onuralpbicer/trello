import { createStyles, makeStyles } from '@material-ui/styles'
import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { Card } from '../model/app.model'
import {
    DraggableTodoItem,
    DragItemTypes,
    DragProps,
    DropProps,
} from '../model/drag.model'
import { MoveEntry } from '../slices/columns.slice'

const useStyles = makeStyles(
    createStyles({
        container: {
            marginTop: '8px',
            border: '1px solid lightgrey',
            borderRadius: '4px',
            padding: '4px',
            backgroundColor: 'lightgrey',
            width: '100%',
        },
    }),
)

export interface EntryLocation {
    colIndex: number
    entryIndex: number
}

interface ItemComponentProps extends EntryLocation {
    card: Card
}

const ItemComponent = (props: ItemComponentProps): JSX.Element => {
    const { card, colIndex, entryIndex } = props
    const classes = useStyles(props)
    const dispatch = useDispatch()

    const ref = useRef<HTMLDivElement | null>(null)
    const [{ isDragging, height }, drag] = useDrag<
        DraggableTodoItem,
        unknown,
        DragProps
    >({
        item: {
            type: DragItemTypes.TodoItem,
            item: card,
            startLocation: {
                colIndex,
                entryIndex,
            },
            height: ref.current?.getBoundingClientRect().height || 39,
        },
        collect(monitor) {
            return {
                isDragging: monitor.isDragging(),
                height: monitor.getItem()?.height || 39,
            }
        },
    })

    const [{ isOver }, drop] = useDrop<DraggableTodoItem, unknown, DropProps>({
        accept: DragItemTypes.TodoItem,
        collect: (monitor) => {
            return {
                isOver: monitor.isOver(),
            }
        },
        drop: (dragItem) => {
            const targetIndex =
                dragItem.startLocation.colIndex === colIndex &&
                dragItem.startLocation.entryIndex < entryIndex
                    ? entryIndex - 1
                    : entryIndex // was a bit of a trial and error thing tbh, but it's because of how instead of actually moving it on hover, I am using padding to make it look like there's a gap for the drop
            dispatch(
                MoveEntry({
                    item: dragItem,
                    sourceCol: dragItem.startLocation.colIndex,
                    sourceEntryIndex: dragItem.startLocation.entryIndex,
                    targetCol: colIndex,
                    targetIndex,
                }),
            )
        },
    })

    drop(drag(ref))
    return (
        <div
            ref={ref}
            style={{
                display: isDragging ? 'none' : 'inherit',
                paddingTop: isOver ? `${height}px` : undefined,
            }}
        >
            <div className={classes.container}>{card.text}</div>
        </div>
    )
}

export default ItemComponent
