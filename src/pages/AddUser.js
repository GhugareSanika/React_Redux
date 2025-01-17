import React, { useState } from 'react';
import "../styles/AddUser.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, loadUsers } from '../redux/actions';

const AddUser = () => {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: ""
    });

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const { fname, lname, email, phone, password } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname || !lname || !email || !phone || !password) {
            setError("Please input all fields");
        } else {
            dispatch(addUser(state));
            dispatch(loadUsers()); // Reload users after adding a new one
            navigate("/");
            setError("");
        }
    };

    return (
        <div className="add-user-container">
            <button 
                onClick={() => navigate("/")}
            >
                Go Back
            </button>
            <h2 className="heading">Add Customer</h2>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Your First name.."
                    value={fname}
                    onChange={handleInputChange}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Your Last Name.."
                    value={lname}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                    value={email}
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number.."
                    value={phone}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your Password.."
                    value={password}
                    onChange={handleInputChange}
                />

                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddUser;
