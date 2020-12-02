import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/posts';
//import * as serviceWorker from './serviceWorker';


const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render( 
<Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
//serviceWorker.unregister();