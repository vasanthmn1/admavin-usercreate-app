import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [editedUser, setEditedUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        designation: ""
    });

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);

        const userToEdit = storedUsers[id];
        if (userToEdit) {
            setEditedUser(userToEdit);
        }
    }, [id]);

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleUpdateUser = () => {
        const updatedUsers = [...users];
        updatedUsers[id] = editedUser;
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Edit User</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={editedUser.firstName}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={editedUser.lastName}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        name="contactNumber"
                        value={editedUser.contactNumber}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        id="designation"
                        name="designation"
                        value={editedUser.designation}
                        onChange={handleFieldChange}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdateUser}
                >
                    Update
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditUser;
