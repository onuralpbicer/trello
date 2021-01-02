import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(
    createStyles({
        outerContainer: {
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#000000AA',
            zIndex: 1600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        innerContainer: {
            backgroundColor: 'white',
        },
    }),
)

interface CommonProps {
    onClose?: () => void
}

interface ModalInnerProps extends CommonProps {
    component: JSX.Element
}

const ModalInner = (props: ModalInnerProps): JSX.Element => {
    const { component, onClose } = props
    const classes = useStyles()

    return (
        <div className={classes.outerContainer} onClick={onClose}>
            <div
                className={classes.innerContainer}
                onClick={(event) => event.stopPropagation()}
            >
                {component}
            </div>
        </div>
    )
}

interface ModalProps extends CommonProps {
    show?: boolean
    children: JSX.Element
}

const Modal = (props: ModalProps): JSX.Element | null => {
    const { show, children, ...rest } = props

    if (show) return <ModalInner component={children} {...rest} />
    return null
}

export default Modal
