import React, { useEffect } from 'react';
import './TableStyles.css'; // Import the CSS file
import { deleteUser, loadUsers } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CustomizedTables() {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete the user?")) {
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="table-container">
            <button className="action-btn add-btn" onClick={() => navigate("/addUser")}>Add User</button>
            <table className="table" aria-label="customized table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.address}</td>
                            <td>
                                <button className="action-btn edit-btn" onClick={() => navigate(`/editUser/${user.id}`)}>Edit</button>
                                <button 
                                    className="action-btn delete-btn" 
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
