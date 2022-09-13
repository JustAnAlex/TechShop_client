import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import styles from './Menu.module.scss'
import getUniqueId from '../../utils/uniqueId';
import { useEffect } from 'react';
import {Context} from "../../index";

const Menu = observer(() => {
    const {type} = useContext(Context)
    const {isLoading, data} = type

    useEffect( () => {type.loadTypes()
        console.log('load types')
    }, [] )

    return (
        <div className={styles.menu}>
            {
            (!isLoading && data?.length)
                ?
            <>
            {data.map((e, index) =>
                <div key={getUniqueId()}>
                    <div
                        className={styles.menu_item}
                        onClick={()=> {
                            type.changeTypes(e.id)
                        }}
                    >{e.name}
                    </div>
                    {(index === data.length-1) || <hr className={styles.hr}/>}
                </div>)
            }
            <hr className={styles.hr}/>
            <div
                className={`${styles.menu_item} ${styles.all_item}`}
                onClick={()=> {
                    type.changeTypes(null)
                }}
            >Все категории
            </div>
            </>
                :
            <div>no data</div>
            }
        </div>
    )
})

export default Menu;