import React, { useReducer, useState, useEffect } from 'react';
import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filer/app-filter'
import EmployeesList from '../employers-list/employers-list'
import EmployeesAddForm from '../employers-add-form/employers-add-form'

const testData = [
    {name: 'Igor', salary: 600, increase: false, like: true, id: 1},
    {name: 'Yamal', salary: 1600, increase: true, like: true, id: 2},
    {name: 'Buhgalter', salary: 2800, increase: false, like: false, id: 3}
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id);
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'TOGGLE_LIKE':
            return state.map(item => item.id === action.id ? {...item, like: !item.like} : item);
        case 'TOGGLE_INCREASE':
            return state.map(item => item.id === action.id ? {...item, increase: !item.increase} : item);
        case 'SET_SALARY':
            return state.map(item => item.id === action.id ? {...item, salary: action.salary} : item);
        default:
            return state;
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, [], () => {
        const localData = localStorage.getItem('data');
        return localData ? JSON.parse(localData) : testData;
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    const allEmployees = () => {
        return data.length
    }

    const employeesIncrease = () => {
        return data.filter(item => item.increase).length
    }

    const [search, setSearch] = useState('')

    function changeSearch(text) {
        setSearch(text)
    }

    function filtredSearch(array) {
        return array.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    const [filter, setFilter] = useState('')

    function changeFilter(type) {
        setFilter(type)
    }

    function filtredData() {
        switch(filter) {
            case '':
                return data
            case 'like':
                return  filteredByLike()
            case 'more':
                return filteredByMore()
            default:
                return data
        }
    }

    const filteredByLike = () => {
        return data.filter(item => item.like)
    }

    const filteredByMore = () => {
        return data.filter(item => item.salary >= 1000)
    }

    return (
        <div className="app">
            <AppInfo allEmployees={allEmployees()} employeesIncrease={employeesIncrease()}/>
            <div className="search-panel">
                <SearchPanel search={search} changeSearch={changeSearch}/>
                <AppFilter filter={filter} changeFilter={changeFilter}/>
            </div>

            <EmployeesList 
            data={filtredSearch(filtredData())} 
            deleteItem={(id) => dispatch({type: 'DELETE_ITEM', id})} 
            toggleLikeItem={(id) => dispatch({type: 'TOGGLE_LIKE', id})} 
            toggleIncreaseItem={(id) => dispatch({type: 'TOGGLE_INCREASE', id})}
            setSalaryItem={(id, salary) => dispatch({type: 'SET_SALARY', id, salary})}
            />
            <EmployeesAddForm addItem={(item) => dispatch({type: 'ADD_ITEM', item})}/>
        </div>
    )
}

export default App