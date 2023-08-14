import React, { useState } from 'react';
import { Col, Image, Layout, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../styles/Layout.module.scss';
import logo from '../../common/images/logo.png';
import { useTranslation } from 'react-i18next';
const cx = classNames.bind(styles);

function Header() {
    const { Header } = Layout;
    const { t, i18n } = useTranslation();
    const [isToggle, setIsToggle] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const handleToggleNav = () => {
        setIsToggle(!isToggle);
    };
    const handleToggleLang = () => {
        const newLanguage = currentLanguage === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <Header className={cx('header')}>
            <Row className={cx('header-wrapper')}>
                <Col className={cx('header-logo')}>
                    <Link to="/" onClick={handleToggleLang}>
                        <Image src={logo} preview={false} width={60} />
                    </Link>
                </Col>
                <Col className={cx('header-menu')}>
                    <Menu className={cx('header-right')} mode="horizontal" disabledOverflow>
                        <Menu.SubMenu title={t('header.home')} className={cx('header-item')}></Menu.SubMenu>
                        <Menu.SubMenu title={t('header.order')} className={cx('header-item')}></Menu.SubMenu>
                        <Menu.SubMenu title={t('header.reservation')} className={cx('header-item')}></Menu.SubMenu>
                        <Menu.SubMenu title={t('header.contact')} className={cx('header-item')}></Menu.SubMenu>
                    </Menu>
                </Col>
                <Col className={cx('header-icon-toggle')}>
                    <Link to="" className={cx('header-menu-toggle')} onClick={handleToggleNav}>
                        <div className={cx(`menu-item`, `${isToggle ? 'first' : ''}`)}></div>
                        <div className={cx(`menu-item`, `${isToggle ? 'mid' : ''}`)}></div>
                        <div className={cx(`menu-item`, `${isToggle ? 'last' : ''}`)}></div>
                    </Link>
                </Col>
                {isToggle ? <Col className={cx('header-menu-bg')}></Col> : null}
                {isToggle ? (
                    <Col className={cx('header-menu-nav-holder')}>
                        <ul className={cx('nav-list')}>
                            <li className={cx('nav-item')}>
                                <Link to="/">{t('header.home')}</Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/">{t('header.order')}</Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/">{t('header.reservation')}</Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/">{t('header.contact')}</Link>
                            </li>
                        </ul>
                    </Col>
                ) : null}
            </Row>
        </Header>
    );
}

export default Header;
