import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { StudentTable } from '../../components/students-table/studenttable.comp';
import students from '../../assets/data/dummy-students.json';

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center mt-5 mb-2'>
            <Button variant='info' style={{fontSize:'2rem',
            padding: '10px 30px'}}>Add New Student</Button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5 mb-2'>
            <div>Total New Student : 50</div>
            <div>Pending Verification: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className='mt-2'>
            Recently Registered Students
        </Col>
      </Row>
      <Row>
        <Col className='recent-student'>
            <StudentTable students={students}/>
        </Col>
      </Row>
    </Container>
  )
}