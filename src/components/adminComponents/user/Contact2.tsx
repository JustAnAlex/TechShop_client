// @ts-nocheck

// import styles from './Contact.module.css'
// import Button from '../button/Button'
// import { FC, useContext } from 'react';
// import { Context } from '../..';
// import { ChangeType } from '../../store/contactFormReducer';

// const Contact: FC<IContact> = ({data}) => {

//     const {modal, contactForm, contact} = useContext(Context)

//     const changeContact = () => {
//         contactForm.attention = false
//         contactForm.actionType = ChangeType.change_contact
//         modal.isVisible = true
//         contactForm.newContact = {...data, phone: String(data.phone)}
//     }

//     const deleteContact = () => {
//         contact.deleteContact(data.id!)
//     }

//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.info_wrapper}>
//                 <div className={styles.info}>{data.name}</div>
//                 <div className={styles.info}>{data.surname} |</div>
//                 <div className={styles.info}>Номер: {data.phone}</div>
//             </div>
//             <div>
//                 <Button onClick={changeContact}>Изменить</Button>
//                 <Button onClick={deleteContact}>Удалить</Button>
//             </div>
//         </div>
//     );
// }

// export default Contact;


export {}