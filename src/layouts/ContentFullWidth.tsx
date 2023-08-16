import React from 'react';
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function ContentFullWidth() {
  return (
    <div className={cx('container')}>
      <Outlet />
    </div>
  );
}

export default ContentFullWidth;
