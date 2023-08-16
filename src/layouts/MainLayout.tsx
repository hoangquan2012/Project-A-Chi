import { Layout } from 'antd';

import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import ContentFullWidth from './ContentFullWidth';
import ContentLayout from './ContentLayout';
import classNames from 'classnames/bind';
import styles from './styles/Layout.module.scss';
import Header from './components/Header';
const cx = classNames.bind(styles);

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { Content } = Layout;
    return (
        <Layout className={cx('container')}>
            <Header />
            <Content>{location.pathname === '/' ? <ContentFullWidth /> : <ContentLayout />}</Content>
        </Layout>
    );
};
export default MainLayout;
