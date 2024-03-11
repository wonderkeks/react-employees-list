import EmployeesListItem from "../employers-list-item/employers-list-item";

import './employees-list.css';

const EmployeesList = ({data, deleteItem, toggleLikeItem, toggleIncreaseItem, setSalaryItem}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem key={id} 
            {...itemProps} 
            id={id}
            deleteItem={() => deleteItem(id)} 
            toggleLikeItem={() => toggleLikeItem(id)} 
            toggleIncreaseItem={() => toggleIncreaseItem(id)}
            setSalaryItem={setSalaryItem}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements.length ? elements : <li className="empty-item">Список пуст</li>}
        </ul>
    )
}

export default EmployeesList;