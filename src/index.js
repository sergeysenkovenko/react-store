import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AppService from './services/app-service';
import { ServiceProvider } from './components/app-service-context';
import store from './store'

const appService = new AppService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={appService}>
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root'));
