import React from 'react'
import { BsArrowLeft, BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col, Row, Table } from 'reactstrap'

export default function ApplicationForConseentTable() {
  const navigate = useNavigate()
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <Row>
        <Col md={6}>
          {' '}
          <h5 className="mb-3">Application Form Consent To Mortgate</h5>
        </Col>
        <Col md={6}>
          <button
            className="app_btn"
            style={{ float: 'right' }}
            onClick={() => navigate('/executive-govermor')}
          >
            <BsPlusLg /> New Application
          </button>
        </Col>
      </Row>
      <div>
        <Table
          striped
          borderless
          className="mt-3"
          size="sm"
          style={{ fontSize: 14 }}
        >
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Right</td>
              <td style={{ fontWeight: 'bold' }}>Name Of Applicant</td>
              <td style={{ fontWeight: 'bold' }}>Location Of Application</td>
              <td style={{ fontWeight: 'bold' }}>
                Name Of Holder (If Different From Application )
              </td>
              <td style={{ fontWeight: 'bold' }}>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>woww</td>
              <td>woww</td>
              <td>
                {/* <button className="table_btn">Re-Grant</button> */}
                Edit
              </td>
            </tr>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>india</td>
              <td>india</td>
              <td>
                {/* <button className="table_btn">Re-Grant</button> */}
                Edit
              </td>
            </tr>{' '}
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>dadd</td>
              <td>daad</td>
              <td>
                {/* <button className="table_btn">Re-Grant</button> */}
                Edit
              </td>
            </tr>{' '}
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>india</td>
              <td>india</td>
              <td>
                {/* <button className="table_btn">Edit</button> */}
                Edit
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
