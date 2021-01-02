import React from 'react'
import { Card } from '../model/app.model'

type ItemComponentProps = Card

const ItemComponent = (props: ItemComponentProps): JSX.Element => {
    const { text } = props
    return <div>{text}</div>
}

export default ItemComponent
