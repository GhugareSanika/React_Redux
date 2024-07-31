import React, { useState, useEffect } from 'react';
import "../styles/AddUser.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, loadUsers, updateUser } from '../redux/actions';

const EditUser = () => {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: ""
    });

    let { id } = useParams();
    const { user } = useSelector((state) => state.data);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { fname, lname, email, phone, password } = state;

    useEffect(() => {
        dispatch(getSingleUser(id));
    }, [dispatch, id]); // Added dispatch and id to the dependency array

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);

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
            dispatch(updateUser(state, id));
            dispatch(loadUsers()); // Reload users after updating
            navigate("/");
            setError("");
        }
    };

    return (
        <div className="add-user-container">
            <button 
                className="go-back"
                onClick={() => navigate("/")}
            >
                Go Back
            </button>
            <h2 className="heading">Edit Customer</h2>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Your First name.."
                    value={fname || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Your Last Name.."
                    value={lname || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                    value={email || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number.."
                    value={phone || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your Password.."
                    value={password || ""}
                    onChange={handleInputChange}
                />

                <button className="submit" type="submit" value="Submit">Update</button>
            </form>
        </div>
    );
}

export default EditUser;
