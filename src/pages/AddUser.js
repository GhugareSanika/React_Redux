import React, { useState } from 'react';
import "../styles/AddUser.css";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: ""
    });

    let navigate = useNavigate();

    const { fname, lname, email, phone, password } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log("User added:", state);
    };

    return (
        <div className="add-user-container">
            <button 
                onClick={() => navigate("/")}
            >
                Go Back
            </button>
            <h2 className="heading">Add User</h2>
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
