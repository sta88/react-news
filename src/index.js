import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const container = document.getElementById('root');
const root = createRoot(container);

const defaultState = {
    isAuth: false,
    isAdmin: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "User":
            return {...state, isAuth: true, isAdmin: false};
        case "Admin":
            return {...state, isAuth: true, isAdmin: true};
        case "Logout":
            return {...state, isAuth: false, isAdmin: false};
        default:
            return state;
    }
}

const store = createStore(reducer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);