
const Table = ({ employees, setIsEditing, setEmployee, handleDelete }) => {
    const handleEdit = (employee) => {
        setEmployee(employee);
        setIsEditing(true);
    }
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2}>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index} className="table-row">
                            <td>{employee.id + 1}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.date}</td>
                            <td><button className="edit" onClick={() => handleEdit(employee)}>Edit</button></td>
                            <td><button className="delete" onClick={() => handleDelete(employee.id)}>Delete</button></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Table;