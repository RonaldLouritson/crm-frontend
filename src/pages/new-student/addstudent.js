import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { AddStudentForm } from '../../components/add-new-student-form/addstudentform.comp';
import { PageBreadCrumb } from '../../components/breadcrumb/breadcrumb.comp';


export const AddStudent = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadCrumb page='New Student'/>
            </Col>
        </Row>

        <Row>
            <Col>
                <AddStudentForm />
            </Col>
        </Row>
    </Container>
  )
}
