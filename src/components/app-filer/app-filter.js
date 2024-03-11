import './app-filter.css'

function AppFilter({filter, changeFilter}) {

    return (
        <div className="btn-group">
            <button 
            className={filter === '' ? "btn btn-light" : 'btn btn-outline-light'}
            type="button"
            onClick={() => {changeFilter('')}}
            >
                Все сотрудники
            </button>
            <button 
            className={filter === 'like' ? "btn btn-light" : 'btn btn-outline-light'}
            type="button"
            onClick={() => {changeFilter('like')}}
            >
                На повышение
            </button>
            <button 
            className={filter === 'more' ? "btn btn-light" : 'btn btn-outline-light'}
            type="button"
            onClick={() => {changeFilter('more')}}
            >
                ЗП больше 1000$
            </button>
        </div>
    )
}

export default AppFilter