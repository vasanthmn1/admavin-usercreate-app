import { Link, useLocation, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";



const Home = () => {
    const naviagte = useNavigate()
    const [ispon, SetisOpen] = useState(false)
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
        setFilteredUsers(storedUsers);
    }, [searchText]);




    const handleSearch = () => {
        const filtered = users.filter(user =>
            user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredUsers(filtered);
    };


    const handleReset = () => {
        setSearchText('');
        setFilteredUsers(users);
    };
    const handleDeleteUser = (index) => {


        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setFilteredUsers(updatedUsers);


    };



    const handleCreateUser = (newUser) => {
        setUsers([...users, newUser]);
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setFilteredUsers([...filteredUsers, newUser]);

    };



    return (
        <div className="container mt-5 home">

            <div className="d-flex mb-3 justify-content-between align-items-center">
                <div className="d-flex">
                    <input style={{ width: "300px" }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className='form-control ' type="text" placeholder="Search Users" />
                    <button onClick={handleSearch} className="btn btn-success ms-2" >search</button>
                    <button onClick={handleReset} className="btn btn-dark ms-2"  >Reset</button>
                </div>
                <div>
                    <Link > <button
                        onClick={() => SetisOpen(true)}
                        className="btn btn-primary text-white">
                        Add User
                    </button></Link>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Designation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {searchText.length === 0 ?

                        filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>

                                <td>{user.email}</td>
                                <td>{user.contactNumber}</td>
                                <td>{user.designation}</td>

                                <td>
                                    {/* <Link to={}> */}
                                    <button onClick={() => {
                                        naviagte(`/users`, {
                                            state: user
                                        })
                                    }} className="btn btn-info me-2">View</button>

                                    <button className="btn btn-danger me-2" onClick={() => handleDeleteUser(index)}>Delete</button>
                                    <button className="btn btn-warning"
                                        onClick={() => {
                                            naviagte(`/edit/${index}`, {
                                                state: user
                                            });
                                        }}
                                    >Edit</button>
                                </td>
                            </tr>
                        ))
                        : filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>

                                <td>{user.email}</td>
                                <td>{user.contactNumber}</td>
                                <td>{user.designation}</td>

                                <td>

                                    <button onClick={() => {
                                        naviagte(`/users`, {
                                            state: user
                                        })
                                    }} className="btn btn-info me-2">View</button>

                                    <button className="btn btn-danger me-2" onClick={() => handleDeleteUser(index)}>Delete</button>
                                    <button className="btn btn-warning">Edit</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {
                ispon && <UserForm handleCreateUser={handleCreateUser} SetisOpen={SetisOpen} />
            }



        </div>
    )
};

export default Home;
