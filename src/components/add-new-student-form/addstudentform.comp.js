import React from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';
import '../../pages/entry/entry.style.css';

export const AddStudentForm = ({handleOnSubmit,handleOnChange}) => {
  return (
    <div className='jumbotron form-box'>
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type='text'
                name='name'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Name'
                required
                />
            </Form.Group>
            <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
                <Row>
                    <Col>
                        <Form.Check
                        inline
                        value="male"
                        type="radio"
                        aria-label="radio 1"
                        label="Male"
                        onChange={handleOnChange}
                        //checked={gender === "male"}
                        />
                        <Form.Check
                        inline
                        value="female"
                        type="radio"
                        aria-label="radio 2"
                        label="Female"
                        onChange={handleOnChange}
                        //checked={gender === "female"}
                        />
                    </Col>
                </Row>
            </Form.Group>
            
            {/* <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                type='text'
                name='gender'
                //value={password}
                onChange={handleOnChange}
                placeholder='Enter Gender'
                required
                />
            </Form.Group> */}
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control 
                type='number'
                name='age'
                min='1'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Age'
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control 
                type='date'
                name='dob'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter DOB'
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type='email'
                name='email'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Email'
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Pastport Number</Form.Label>
                <Form.Control 
                type='text'
                name='pastportno'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Name'
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control 
                type='text'
                name='country'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Country'
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control 
                type='text'
                name='address'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Address'
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Remark</Form.Label>
                <Form.Control 
                as='textarea'
                name='remark'
                rows='5'
                //value={username}
                onChange={handleOnChange}
                placeholder='Enter Remark'
                required
                />
            </Form.Group>
            <br/>
            <Button type='submit' variant='info' className='block'>
                Save
            </Button>
        </Form>
    </div>
  )
}
