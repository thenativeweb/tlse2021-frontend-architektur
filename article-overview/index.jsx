import { IFrameApp } from './src/IFrameApp';
import React from 'react';
import ReactDOM from 'react-dom';
import { ScriptApp } from './src/ScriptApp';

import 'bootstrap/dist/css/bootstrap.min.css';

if (import.meta.env.MICROFRONTEND_MODE === 'iframe') {
  ReactDOM.render(<IFrameApp />, document.getElementById('root'));
} else {
  window.renderArticleOverview = (targetId, history) => {
    ReactDOM.render(<ScriptApp history={history} />, document.getElementById(targetId));
  };
}
