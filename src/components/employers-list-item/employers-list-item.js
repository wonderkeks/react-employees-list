import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase, deleteItem, like, toggleLikeItem, toggleIncreaseItem, setSalaryItem, id}) => {
    let classes = () => {
        let temp = 'list-group-item d-flex justify-content-between'
        if (increase) {
            temp += ' increase'
        }
        if (like) {
            temp += ' like'
        }
        return temp
    }

    return (
        <li className={classes()}>
            <span className="list-group-item-label" onClick={toggleLikeItem}>{name}</span>
            <input type="text" className="list-group-item-input" value={salary} onChange={(event) => {setSalaryItem(id, event.target.value)}}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={toggleIncreaseItem}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm " onClick={deleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;