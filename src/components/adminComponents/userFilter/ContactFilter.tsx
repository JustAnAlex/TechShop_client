// @ts-nocheck

// import Select from '../select/Select';
// import Input from '../input/Input';
// import { useContext } from 'react';
// import { Context } from '../..';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react-lite';
// import styles from './ContactFilter.module.css'

// const descriptions_options = [
//     {value: 'name', name:'По имени'},
//     {value: 'surname', name:'По фамилии'}
// ]

// const strictMode_options = [
//     {value: false, name:'not Strict'},
//     {value: true, name:'Strict'}
// ]

// const ContactFilter = observer(() => {

//     const {contactFilter} = useContext(Context)

//     return (
//         <div className={styles.filter}>
//             <Input
//                 value={contactFilter.searchQuery}
//                 onChange={(e:React.ChangeEvent<HTMLInputElement>) => contactFilter.setSearchQuery(e.target.value)}
//                 placeholder='Поиск.....'
//             />
//             <div className='selector'>
//                 <Select
//                     value={contactFilter.selectedSort}
//                     onChange={(e:React.ChangeEvent<HTMLSelectElement>) => contactFilter.setCelectedSort(e.target.value)}
//                     defaultValue="Сортировка"
//                     options={descriptions_options}
//                 />
//                 <Select
//                     value={contactFilter.searchMethod}
//                     onChange={(e:React.ChangeEvent<HTMLSelectElement>) => contactFilter.setSearchMethod(e.target.value)}
//                     defaultValue="Поиск по"
//                     options={descriptions_options}
//                 />
//                 <Select
//                     value={contactFilter.searchQueryMode}
//                     onChange={(e:React.ChangeEvent<HTMLSelectElement>) => contactFilter.setSearchQueryMode(e.target.value)}
//                     defaultValue="Режим сортировки"
//                     options={strictMode_options}
//                 />
//             </div>
//         </div>
//     );
// })

// export default ContactFilter;

export {}
