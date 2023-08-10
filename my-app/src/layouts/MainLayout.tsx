import { Col, Image, Layout, Menu, Row } from 'antd';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import ContentFullWidth from './ContentFullWidth';
import ContentLayout from './ContentLayout';
import logo from '../common/images/logo.png';
import classNames from 'classnames/bind';
import styles from './styles/Layout.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const { Header, Content, Footer } = Layout;
    return (
        <Layout className={cx('container')}>
            <Header className={cx('header')}>
                <Row className={cx('header-wrapper')}>
                    <Col>
                        <Link to="/">
                            <Image src={logo} preview={false} width={60} />
                        </Link>
                    </Col>
                    <Col>
                        <Menu className={cx('header-right')} mode="horizontal" disabledOverflow>
                            <Menu.SubMenu title={t('header.home')} className={cx('header-item')}></Menu.SubMenu>
                            <Menu.SubMenu title={t('header.order')} className={cx('header-item')}></Menu.SubMenu>
                            <Menu.SubMenu title={t('header.reservation')} className={cx('header-item')}></Menu.SubMenu>
                            <Menu.SubMenu title={t('header.contact')} className={cx('header-item')}></Menu.SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Content>{location.pathname === '/' ? <ContentFullWidth /> : <ContentLayout />}</Content>
        </Layout>
    );
};
export default MainLayout;
