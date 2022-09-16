import React, {useEffect, useContext} from 'react';
import {observer} from "mobx-react-lite";

import styles from './Device.module.scss'
import getUniqueId from "../../utils/uniqueId";
import {Context} from "../../index";
import Device from './Device';

const DeviceList = observer(() => {
    const {type, device} = useContext(Context)

    useEffect(()=>{
        device.loadDevice(type.currentType, type.currentBrand)
        console.log('loadDevice')
        // eslint-disable-next-line
    },[type.currentType, type.currentBrand])

    return (
        <div className={styles.device_list}>
            {
            (!device.isLoading && device.count)
                ?
            device.data!.map(data =>
                <Device
                    key={getUniqueId()}
                    data={data}
                />
            )
                :
                <>no data</>
            }
        </div>
    );
})

export default DeviceList;