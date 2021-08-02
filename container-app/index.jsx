import { IFrameContainerApp } from './src/iFrameEmbedd/IFrameContainerApp';
import React from 'react';
import ReactDOM from 'react-dom';
import { ScriptContainerApp } from './src/scriptEmbedd/ScriptContainerApp';

import 'bootstrap/dist/css/bootstrap.min.css';

if (import.meta.env.MICROFRONTEND_MODE === 'iframe') {
  ReactDOM.render(<IFrameContainerApp />, document.getElementById('root'));
} else {
  ReactDOM.render(<ScriptContainerApp />, document.getElementById('root'));
}
