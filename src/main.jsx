import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalResetCss from './components/GlobalStyles/index.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalResetCss>
                <App />
            </GlobalResetCss>
        </Provider>
    </React.StrictMode>,
);
