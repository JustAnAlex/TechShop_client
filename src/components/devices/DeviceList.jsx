import {useEffect, useContext} from 'react';

import styles from './Device.module.scss'
import {observer} from "mobx-react-lite";
import getUniqueId from "../../utils/uniqueId";
import {Context} from "../../index";
import Device from './Device';

const DeviceList = observer(() => {
    const {type, device} = useContext(Context)

    useEffect(()=>{
        device.loadDevice(type.currentType)
    },[type.currentType])

    return (
        <div className={`${styles.device_list}`}>
            {
                device.data &&
                device.data.map(data =>
                    <Device
                        key={getUniqueId()}
                        data={data}
                    />
                )
            }
        </div>
    );
})

export default DeviceList;