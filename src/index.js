import React from 'react'
import  { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import './style/app.css'
import configureStore from './store/configureStore'


const store = configureStore()

render(
    <Provider store={store}>
        <div className="app">
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
)