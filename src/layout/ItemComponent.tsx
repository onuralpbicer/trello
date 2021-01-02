import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import { useDrag } from 'react-dnd'
import { Card } from '../model/app.model'
import {
    DraggableTodoItem,
    DragItemTypes,
    DragProps,
} from '../model/drag.model'

const useStyles = makeStyles(
    createStyles({
        container: {
            marginTop: '8px',
            border: '1px solid lightgrey',
            borderRadius: '4px',
            padding: '4px',
            backgroundColor: 'lightgrey',
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

    const [{ isDragging }, drag] = useDrag<
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
        },
        collect(monitor) {
            return {
                isDragging: monitor.isDragging(),
            }
        },
    })

    return (
        <div
            ref={drag}
            className={classes.container}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            {card.text}
        </div>
    )
}

export default ItemComponent
