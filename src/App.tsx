import React from 'react';
import { Router } from './routes';
import styles from './layouts/styles/Layout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("App")}>
      <Router />
    </div>
  );
}

export default App;
