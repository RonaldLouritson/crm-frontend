import React from 'react';
import { Table } from 'react-bootstrap';

export const StudentTable = ({students}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>DOB</th>
                <th>Email</th>                
                <th>Passport No</th>
                <th>Country</th>
                <th>Address</th>             
            </tr>
        </thead>
        <tbody>
            {students.length && students.map((row) => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.gender}</td>
                <td>{row.age}</td>
                <td>{row.dob}</td>
                <td>{row.email}</td>               
                <td>{row.pastportno}</td>
                <td>{row.country}</td>
                <td>{row.address}</td>
            </tr>
            ))}

            {/* <tr>
                <td>1</td>
                <td>Rajinikanth</td>
                <td>male</td>
                <td>70</td>
                <td>12/12/1956</td>
                <td>rajini@rajini.com</td>               
                <td>1111111111111</td>
                <td>india</td>
                <td>tamil nadu</td>
            </tr> */}
        </tbody>
    </Table>
  )
}
