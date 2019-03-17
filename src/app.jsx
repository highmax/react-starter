import React from 'react';
import { hot } from 'react-hot-loader';

import style from './app.scss';

const App = () => (
  <div className={style.app}>
    react Starter
    <span role="img" aria-label="rocket">
      🚀
    </span>
    <div className={style.sassyDiv}>Get Sassy!</div>
  </div>
);

export default hot(module)(App);
