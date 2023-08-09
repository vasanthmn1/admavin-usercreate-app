import { useState } from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';



const UserForm = ({ handleCreateUser, SetisOpen }) => {


    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contactNumber: '',
        designation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.firstName || !user.lastName || !user.email || !user.contactNumber || !user.designation || !user.password) {
            alert('Please fill in the fields.');
            return;
        }

        handleCreateUser(user);
        SetisOpen(false)

    };

    return (
        <Container className='form_form' style={{ border: "1px solid #000" }}>
            <h6 className=' my-4 '>UserInformation</h6>
            <Form onSubmit={handleSubmit}>
                <Row className=''>

                    <Col lg="4">
                        <Form.Group controlId="firstName" >
                            <Form.Label>firstName</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                className='form-control'
                                value={user.firstName}
                                onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg="4">
                        <div >
                            <Form.Label>lastName</Form.Label>
                            <input type="text"
                                className='form-control'
                                name="lastName"
                                value={user.lastName}
                                onChange={handleChange} />
                        </div>

                    </Col>
                    <Col lg="4">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4">

                        <Form.Group controlId="contactNumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                type="tel"
                                name="contactNumber"
                                value={user.contactNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg="4">
                        <Form.Group controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                value={user.designation}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg="4">
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>



                    <div className='mb-3 mt-4'>
                        <Button
                            className='' variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button
                            onClick={() => SetisOpen(false)}
                            className=' ms-3' variant="dark">
                            cancel
                        </Button>
                    </div>
                </Row>
            </Form>
        </Container>
    );
};

export default UserForm;
