import { useState } from 'react';
import Swal from "sweetalert2";

const Edit = ({ employee, setIsEditing, employees, setEmployees }) => {
    const [firstName, setFirstName] = useState(employee.firstName);
    const [lastName, setLastName] = useState(employee.lastName);
    const [email, setEmail] = useState(employee.email);
    const [salary, setSalary] = useState(employee.salary);
    const [date, setDate] = useState(employee.date);

    const editEmployee = (e) => {
        const currentEmployee = {
            id: employee.id,
            firstName,
            lastName,
            email,
            salary,
            date
        };
        Swal.fire({
            icon: "info",
            title: "Editing",
            text: `${employee.firstName} edited.`,
            showConfirmButton: false,
            timer: 2000,
        });

        e.preventDefault();


        const newEmployees = employees.map(emp => emp.id == employee.id ? currentEmployee : emp);
        setEmployees(newEmployees);
        setIsEditing(false);
    }
    return (
        <div className="small-container">
            <h4>Employee Edit</h4>
            <div>

                <div>
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    /></div>
                <div>
                    <input
                        type="number"
                        onChange={(e) => setSalary(e.target.value)}
                        value={salary}
                    /></div>
                <div>
                    <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    /></div>
            </div>
            <div className="add-buttons">
                <button className="edit" onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={editEmployee}>Save</button>
            </div>
        </div>
    )
}

export default Edit;