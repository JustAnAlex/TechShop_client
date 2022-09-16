
// @ts-nocheck

// import { observer } from 'mobx-react-lite';
// import React, {FC, useContext} from 'react';
// import { Context } from '../..';
// import { ChangeType } from '../../store/contactFormReducer';
// import Button from '../button/Button';
// import Input from '../input/Input';
// import styles from './ContactForm.module.css'

// const ContactForm = observer(() => {

//     const {contact, modal, contactForm, contactFilter} = useContext(Context)

//     const addOrChange = (e:React.MouseEvent) => {
//         e.preventDefault()
//         for (let key in contactForm.newContact) {
//             let safeKey = key as keyof typeof contactForm.newContact;
//             if(!contactForm.newContact[safeKey]) return contactForm.attention = true
//         }
//         if (contactForm.actionType === ChangeType.add_NewContact) {
//            contact.addContact({...contactForm.newContact, phone: Number(contactForm.newContact.phone)}) 
//         }
//         if (contactForm.actionType === ChangeType.change_contact) {
//            contact.changeContact({...contactForm.newContact, phone: Number(contactForm.newContact.phone)}) 
//         }
//         modal.isVisible = false
//         contactForm.resetNewContact()
//         contactForm.attention = false
//     }

//     return (
//         <form>
//             {contactForm.attention && <div className={styles.error}>Все поля должны быть заполнены!</div>}
//             <Input 
//                 value = {contactForm.newContact.name}
//                 onChange = { (e:React.ChangeEvent<HTMLInputElement>) => contactForm.updateNewContact('name',e.target.value) }
//                 type='text'
//                 placeholder='Имя'
//             />
//             <Input
//                 value={contactForm.newContact.surname}
//                 onChange = { (e:React.ChangeEvent<HTMLInputElement>) => contactForm.updateNewContact('surname',e.target.value) }
//                 type='text'
//                 placeholder='Фамилия'
//             />
//             <Input
//                 value={contactForm.newContact.phone}
//                 onChange = { (e:React.ChangeEvent<HTMLInputElement>) => contactForm.updateNewContact('phone', e.target.value ) }
//                 type='number'
//                 placeholder='Номер'
//                 onWheel={(e:React.WheelEvent<HTMLInputElement>) => e.currentTarget.blur()}
//             />
//             <Button onClick={addOrChange} disabled={false} >{contactForm.actionType}</Button>
//         </form>
//     );
// })

// export default ContactForm;


export {}