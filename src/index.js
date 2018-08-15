import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import FirstStep from './Steps/FirstStep';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(  
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/first-step" component={FirstStep} />
    </Switch>
</ BrowserRouter> , document.getElementById('root'));
registerServiceWorker();
