import { toJS } from 'mobx';
import React from 'react';
import styles from './Device.module.scss'

const Device = ({data}) => {
    console.log(toJS(data))
    return (
        <div className={styles.device}>
            <div className={styles.img_wrapper}>
                <img src={`http://localhost:5000/${data.img}`} alt="Изображение отсутствует" />
            </div>
            <div className={styles.type}>{data.name}</div>
            <div className={styles.model}>{data.price}</div>
        </div>
    );
};

export default Device;
