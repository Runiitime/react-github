import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import App from './App';
import {Provider} from 'react-redux'
import {initializeStore} from './store'
let store = initializeStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));