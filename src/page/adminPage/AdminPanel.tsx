import React from 'react';
import styles from './AdminPanel.module.scss'

const AdminPanel = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.add_Device}>
                <input type='text' placeholder='name'/>
                <input type='number' placeholder='price'/>
                <input type='number' placeholder='rating'/>
                <input type='number' placeholder='typeId'/>
                <input type='number' placeholder='brandId'/>
                <button>Добавить device</button>
            </div>
        </div>
    );
};

export default AdminPanel;