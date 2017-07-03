/* tslint:disable */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FocusStyleManager } from '@blueprintjs/core';

FocusStyleManager.onlyShowFocusOnTabs();

const render = () => {
  const App = require('./App').default;
  ReactDOM.render(<App />, document.getElementById('app'));
}

render();

if (module.hot) {
  module.hot.accept(render);
}
