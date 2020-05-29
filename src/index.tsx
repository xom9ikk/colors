import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import * as serviceWorker from './serviceWorker';

import './styles/sass/main.scss';
import { App } from './components/App';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
