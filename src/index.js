import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(
	<LocaleProvider locale={enUS}>
		<App />
	</LocaleProvider>, 
	document.getElementById('root')
);
registerServiceWorker();