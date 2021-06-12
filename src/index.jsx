import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import UsersTable from './Components/UsersTable';
import './assets/main.scss';

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <UsersTable/>
            </Provider>
        </React.StrictMode>
    )
}

render(<App/>, document.getElementById('app'));

