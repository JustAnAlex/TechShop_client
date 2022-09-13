import React from 'react';

import DeviceList from '../../components/devices/DeviceList';
import Menu from '../../components/menu/Menu';
import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <div className={styles.main_page}>
            <Menu />
            <DeviceList />
        </div>
    );
};

export default MainPage;