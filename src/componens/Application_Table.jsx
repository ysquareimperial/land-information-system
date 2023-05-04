import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

export default function Application_Table() {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const getApplication = () => {
    _fetchApi(
      '/api/get-application',
      (res) => {
        console.log(res)
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getApplication()
  }, [])
  return (
    <div>
      {/* {JSON.stringify(data[0])} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <Row>
          <Col md={6}>
            {' '}
            <h5 className="mb-3">List of Application</h5>
          </Col>
          <Col md={6}>
            <button
              className="app_btn"
              style={{ float: 'right' }}
              onClick={() => navigate('/application-form')}
            >
              <BsPlusLg /> New Application
            </button>
          </Col>
        </Row>
        <SearchBar />

        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
              <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
              <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
              {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
              <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td>
              <td style={{ fontWeight: 'bold' }}>
                {' '}
                <div style={{ textAlign: 'right' }}>Status</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data[0]?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.Applicant_full_name}</td>
                <td>{item.Business_location}</td>
                <td>{item.Applicant_nationality}</td>
                <td>{item.State_of_origin}</td>
                <td>{item.occupation_business}</td>
                <td>{item.length_of_term_required}</td>
                <td>
                  <div style={{ textAlign: 'right' }}>
                    {item.status === 'application' ? (
                      <button className="pending">Pending</button>
                    ) : item.status === 'file_no_generated' ? (
                      <button className="paid">Paid</button>
                    ) : item.status === 'application-fee-paid' ? (
                      <button className="approved">Approved</button>
                    ) : (
                      ''
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}
