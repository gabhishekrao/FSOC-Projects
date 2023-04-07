import React from 'react';
import { Provider } from 'react-redux';
import  { legacy_createStore as createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);

const store = createStore(reducers, compose(applyMiddleware(thunk)))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );
