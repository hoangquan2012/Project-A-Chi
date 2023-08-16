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
    const [currentMenu, setCurrentMenu] = useState('home');
    const onClick = (e: any) => {
        console.log('click ', currentMenu);
        setCurrentMenu(e.key);
    };

    const handleToggleNav = () => {
        setIsToggle(!isToggle);
    };
    const handleToggleLang = () => {
        const newLanguage = currentLanguage === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    const items = [
        {
            label: t('header.home'),
            key: 'home',
            className: cx('header-item')
        },
        {
            label: t('header.order'),
            key: 'order',
            className: cx('header-item')
        },
        {
            label: t('header.reservation'),
            key: 'reservation',
            className: cx('header-item')
        },
        {
            label: t('header.contact'),
            key: 'contact',
            className: cx('header-item')
        }
    ];

    return (
        <Header className={cx('header')}>
            <Row className={cx('header-wrapper')}>
                <Col className={cx('header-logo')}>
                    <Link to="/" onClick={handleToggleLang}>
                        <Image src={logo} preview={false} width={60} />
                    </Link>
                </Col>
                <Col className={cx('header-menu')}>
                    <Menu className={cx('header-right')} mode="horizontal" selectedKeys={[currentMenu]} onClick={onClick} items={items} disabledOverflow />
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
