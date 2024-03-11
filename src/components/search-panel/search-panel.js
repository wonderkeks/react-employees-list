import './search-panel.css'

function SearchPanel({search, changeSearch}) {

    return (
        <input type="text"
        value={search}
        onChange={(event) => {changeSearch(event.target.value.trim())}}
        className="form-control search-input"
        placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel