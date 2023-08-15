import React from 'react';
import menuImg from '../../common/images/menu.jpeg';
import { Col, Typography, Row, Space, Button } from 'antd';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
import Typewriter from '../../components/component/Typewriter';

const cx = classNames.bind(styles);
const { Text } = Typography;

const Home = () => {
    const { t } = useTranslation();
    return (
        <Row className={cx('content-intro')}>
            <Col span={12} className={cx('intro-left')}>
                <Space direction="vertical" className={cx('intro-container')}>
                    <Text className={cx('text')}>{t('content.intro-1')}</Text>
                    <Typewriter className={cx('text', 'text-large')} text={t('content.intro-2')} delay={50} />
                    <Space direction="vertical">
                        <Text className={cx('text','text-normal')}>{t('content.intro-3')}</Text>
                        <Text className={cx('text','text-normal')}>{t('content.intro-4')}</Text>
                    </Space>
                    <Button>{t('content.order')}</Button>
                </Space>
            </Col>
            <Col span={12} className={cx('intro-right')}>
                <motion.div
                    className={cx('box')}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    style={{ backgroundImage: `url(${menuImg})` }}
                />
            </Col>
        </Row>
    );
};

export default Home;
