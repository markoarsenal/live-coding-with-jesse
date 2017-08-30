import React from 'react';
import ReactDOM from 'react-dom';
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

function ThemeApp () {
    return (
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    );
}

ReactDOM.render(<ThemeApp />, document.getElementById('root'));
registerServiceWorker();
