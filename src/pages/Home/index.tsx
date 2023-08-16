import React from 'react';
import menuImg from '../../common/images/menu.jpeg';
import { Col, Typography, Row, Space, Button, Divider } from 'antd';
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
                    <div className={cx('container-left')}></div>
                    <Space className={cx('container-right')}>
                        <Text className={cx('text')}>{t('content.intro-1')}</Text>
                        <Text className={cx('text', 'text-large')}>
                             <Typewriter text={t('content.intro-2')} delay={100} />
                        </Text>

                        <Space direction="vertical">
                            <Text className={cx('text', 'text-normal')}>{t('content.intro-3')}</Text>
                            <Text className={cx('text', 'text-normal')}>{t('content.intro-4')}</Text>
                        </Space>
                        <Button>{t('content.order')}</Button>
                    </Space>
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
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 36%),url(${menuImg})` }}
                />
            </Col>
        </Row>
    );
};

export default Home;
