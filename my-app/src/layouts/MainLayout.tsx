import { Col, Image, Layout, Menu, Row } from 'antd';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import ContentFullWidth from './ContentFullWidth';
import ContentLayout from './ContentLayout';
import logo from '../common/images/logo.png';
import classNames from 'classnames/bind';
import styles from './styles/Layout.module.scss';

const cx = classNames.bind(styles);

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
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
                            <Menu.SubMenu title="HOME"></Menu.SubMenu>
                            <Menu.SubMenu title="Chất lượng nước"></Menu.SubMenu>
                            <Menu.SubMenu title="Chất lượng nước"></Menu.SubMenu>
                            <Menu.SubMenu title="Chất lượng nước"></Menu.SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Content>{location.pathname === '/' ? <ContentFullWidth /> : <ContentLayout />}</Content>
        </Layout>
    );
};
export default MainLayout;
