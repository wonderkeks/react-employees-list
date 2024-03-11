import React, { useState } from 'react';
import './employees-add-form.css';

const EmployeesAddForm = ({addItem}) => {
    const [name, setName] = useState('')

    function changeName(event) {
        setName(event.target.value.trim())
    }

    const [salary, setSalary] = useState('')

    function changeSalary(event) {
        setSalary(event.target.value.trim())
    }

    const isAllReady = () => {
        return salary.length && name.length
    }

    function submitForm(event) {
        event.preventDefault()
        let item = {name: name, salary: salary, increase: false, like: false, id: Date.now()}
        addItem(item)
        setName('')
        setSalary('')
    }


    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    value={name}
                    onChange={changeName}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    value={salary}
                    onChange={changeSalary}
                    />

                <button type="submit"
                        className="btn btn-outline-light" disabled={!isAllReady()}  onClick={submitForm}>Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;