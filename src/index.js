import React from 'react';

//ReactDOM goes into the root file
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApiGet from './App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
