import React from 'react';
import styles from './Device.module.scss'

const URL = `http://${window.location.hostname}:${process.env.BACKEND_PORT}/`
const REACT_URL = process.env.REACT_APP_API_URL || URL

const Device = ({data}: {data: IDevice}) => {
    return (
        <div className={styles.device}>
            <div className={styles.img_wrapper}>
                {data.img && <img src={`${REACT_URL}${data.img}`} alt="Изображение отсутствует" />}
            </div>
            <div className={styles.information}>
                <div className={styles.type}>{data.name}</div>
                <div className={styles.model}>{data.price}</div>
            </div>
        </div>
    )
}

export default Device;
