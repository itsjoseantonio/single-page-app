import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global/index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
