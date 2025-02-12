import Table from "./table";
import { employeesData } from "../data/data.jsx";
import Edit from "./Edit.jsx";
import { useState } from 'react';
import Header from "./Header.jsx";
import Add from "./Add.jsx";
import Swal from "sweetalert2";



const Dashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [employee, setEmployee] = useState(null);
    const [employees, setEmployees] = useState(employeesData);

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won' be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it.',
            cancelButtonText: 'No, cancel.',
        }).then(result => {
            if (result.value) {
                const newEmployees = employees.filter(emp => emp.id !== id);
                setEmployees(newEmployees);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted.',
                    text: `The employee has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    }

    return (
        <div>

            {
                !isEditing && !isAdding && (
                    <>
                        <Header setIsAdding={setIsAdding} />
                        <Table employees={employees} setIsEditing={setIsEditing} setEmployee={setEmployee} handleDelete={handleDelete} />
                    </>
                )
            }

            {
                isEditing && !isAdding && (
                    <Edit employee={employee} setIsEditing={setIsEditing} setEmployees={setEmployees} employees={employees} />
                )
            }
            {
                isAdding && !isEditing && (
                    <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />
                )
            }
        </div>
    )
}

export default Dashboard;