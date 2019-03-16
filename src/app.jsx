import React from 'react';
import { hot } from 'react-hot-loader';

import style from './app.css';

const App = () => (
  <div className={style.app}>
    react Starter
    <span role="img" aria-label="rocket">
      🚀
    </span>
  </div>
);

export default hot(module)(App);
