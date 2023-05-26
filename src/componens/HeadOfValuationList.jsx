import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Table } from 'reactstrap'
import { _fetchApi } from '../helpers/helper'
import SearchBar from './SearchBar'

export default function HeadOfValuationList() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  const getAssignments = () => {
    _fetchApi(
      '/app/get-all-assignments',
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
    getAssignments()
  }, [])
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <Row>
          <Col md={9}>
            {' '}
            <h5 className="mb-3">
              Application for consent to assign statutory right of occupancy
            </h5>
          </Col>
          <Col md={3}>
            <button
              className="app_btn"
              style={{ float: 'right' }}
              onClick={() => navigate('/assignment')}
            >
              <BsPlusLg /> New Assignment
            </button>
          </Col>
        </Row>
        <SearchBar />

        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Number</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Address</td>
              <td style={{ fontWeight: 'bold' }}>Assignee Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Assignee Address</td>
              {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
              <td style={{ fontWeight: 'bold' }}>
                {' '}
                <div style={{ textAlign: 'right' }}>Status</div>
              </td>
              <td style={{ fontWeight: 'bold' }}>
                <div style={{ textAlign: 'right' }}>Action</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data[0]?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td></td>
                <td>{item.full_name_of_the_applicant}</td>
                <td>{item.residential_address}</td>
                <td>{item.full_name_of_assignee}</td>
                <td>{item.residential_address_assignee}</td>
                <td>{item.status}</td>
                <td>
                  <div style={{ textAlign: 'right' }}>
                    {item.status === 'application' ? (
                      <button className="pending">Pending</button>
                    ) : item.status === 'file_no_generated' ? (
                      <button className="approved">Approved</button>
                    ) : item.status === 'application-fee-paid' ? (
                      <button className="paid">paid</button>
                    ) : (
                      ''
                    )}
                  </div>
                </td>
                <td>
                  {' '}
                  <div style={{ textAlign: 'right' }}>
                    <button
                      className="paid"
                      onClick={() => navigate('/head-of-valuation-process')}
                    >
                      Process
                    </button>
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
