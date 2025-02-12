import { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [salary, setSalary] = useState();
    const [date, setDate] = useState();

    const handleAdd = () => {

        const id = employees.length + 1;
        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }

        Swal.fire({
            icon: "success",
            title: "Adding",
            text: `${firstName} added.`,
            showConfirmButton: false,
            timer: 1500,
        });
        const updatedEmployees = [...employees, employee];
        setEmployees(updatedEmployees);
        setIsAdding(false);
    }
    return (
        <div className="small-container">
            <h4>Employee Add</h4>
            <div>

                <div>
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    /></div>
                <div>
                    <input
                        type="number"
                        onChange={(e) => setSalary(e.target.value)}
                    /></div>
                <div>
                    <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                    /></div>
            </div>
            <div className="add-buttons">
                <button className="edit" onClick={() => setIsAdding(false)}>Cancel</button>
                <button onClick={() => handleAdd()}>Save</button>
            </div>

        </div>
    )
}

export default Add;