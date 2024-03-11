import './app-info.css'

function AppInfo(props) {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании "Рога и копыта"</h1>
            <h2>Общее число сотрудников: {props.allEmployees}</h2>
            <h2>Премию получат: {props.employeesIncrease}</h2>
        </div>
    )
}

export default AppInfo