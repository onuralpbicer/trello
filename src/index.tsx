import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './layout/App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <App />
            </DndProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)
