import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ServiceWorkerService from './services/ServiceWorkerService';

ReactDOM.render(<App />, document.getElementById('root'));

ServiceWorkerService.register();
