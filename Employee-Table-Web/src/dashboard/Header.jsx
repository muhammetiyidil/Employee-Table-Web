const Header = ({ setIsAdding }) => {
    return (
        <div>
            <div className="header">
                <h2>Employee Table</h2>
            </div>
            <div>
                <button className="btn-add" onClick={() => setIsAdding(true)}>Add</button>
            </div>
        </div>
    )
}

export default Header;